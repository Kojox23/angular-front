import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Muscle } from '../../models/muscle';
import { MuscleService } from '../../services/muscle.service';

@Component({
  selector: 'app-muscle-details',
  templateUrl: './muscle-details.component.html',
  styleUrls: ['./muscle-details.component.scss'],
})
export class MuscleDetailsComponent {
  muscleId: number;
  muscle$: Observable<Muscle>;

  constructor(
    private route: ActivatedRoute,
    private muscleService: MuscleService,
    private location: Location
  ) {
    this.muscleId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    if (this.muscleId) {
      this.muscle$ = this.muscleService.getById(this.muscleId);
    }
  }

  showReceivedValue(value: boolean) {
    console.log(value);
  }
}
