import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { MuscleFormComponent } from '../../components/muscle-form/muscle-form.component';
import { Muscle } from '../../models/muscle';
import { MuscleService } from '../../services/muscle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muscle-list',
  templateUrl: './muscle-list.component.html',
  styleUrls: ['./muscle-list.component.scss'],
})
export class MuscleListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  displayedColumns: string[] = ['muscleName', 'exercice', 'update', 'delete'];

  muscle$: Observable<Muscle[]>;

  constructor(
    private muscleService: MuscleService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.muscle$ = this.muscleService.get();
  }

  fetchData() {
    this.muscle$ = this.muscleService.get();
  }

  openMuscleForm(muscle?: Muscle) {
    const dialogRef = this.dialog.open(MuscleFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: muscle ? false : true,
        muscle: muscle ? muscle : undefined,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.fetchData();
        }
      });
  }

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer ce muscle ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    });

    ref
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.muscleService
            .delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success'],
              });
              this.fetchData();
            });
        }
      });
  }

  showMuscleDetails(muscleId: number) {
    this.router.navigate(['/muscles/' + muscleId]);
  }
}
