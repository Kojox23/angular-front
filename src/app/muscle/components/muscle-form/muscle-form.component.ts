import { MuscleService } from './../../services/muscle.service';
import { Muscle } from '../../models/muscle';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface MuscleFormData {
  isCreateForm: boolean;
  muscle: Muscle;
}

@Component({
  selector: 'app-muscle-form',
  templateUrl: './muscle-form.component.html',
  styleUrls: ['./muscle-form.component.scss'],
})
export class MuscleFormComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  muscleForm = this.fb.group({
    id: [0, [Validators.required]],
    muscleName: ['', [Validators.required]],
    exercice: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<MuscleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MuscleFormData,
    private fb: FormBuilder,
    private muscleService: MuscleService,
    private _snackBar: MatSnackBar
  ) {
    if (!data.isCreateForm) {
      this.setMuscleForm(data.muscle);
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setMuscleForm(muscle: Muscle) {
    this.muscleForm.setValue({
      id: muscle.id,
      muscleName: muscle.muscleName,
      exercice: muscle.exercice,
    });
  }

  get title() {
    if (this.data.isCreateForm) {
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName() {
    if (this.data.isCreateForm) {
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit() {
    if (this.muscleForm.valid) {
      if (this.data.isCreateForm) {
        this.muscleForm.value.id = Date.now() + Math.random();
        this.muscleService
          .create(this.muscleForm.value as Muscle)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success'],
            });

            this.dialogRef.close(true);
          });
      } else {
        this.muscleService
          .update(this.muscleForm.value as Muscle)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success'],
            });
            this.dialogRef.close(true);
          });
      }
    }
  }
}
