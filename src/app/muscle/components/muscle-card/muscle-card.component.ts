import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Muscle } from '../../models/muscle';

@Component({
  selector: 'app-muscle-card',
  templateUrl: './muscle-card.component.html',
  styleUrls: ['./muscle-card.component.scss'],
})
export class MuscleCardComponent {
  @Input() selectedMuscle: Muscle;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.selectedMuscle) {
      this.received.emit(true);
    }
  }
}
