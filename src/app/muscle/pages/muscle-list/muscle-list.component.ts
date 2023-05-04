import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { MuscleService } from '../../services/muscle.service';
import { Muscle } from '../../models/muscle';

@Component({
  selector: 'app-muscle-list',
  templateUrl: './muscle-list.component.html',
  styleUrls: ['./muscle-list.component.scss'],
})
export class MuscleListComponent implements OnInit {
  muscles$: Observable<Muscle[]> | undefined;
  students$: Observable<any> | Subscribable<any> | Promise<any> | undefined;

  constructor(private muscleService: MuscleService) {}

  ngOnInit(): void {
    this.muscles$ = this.muscleService.get();
  }
}
