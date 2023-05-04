import { Component, Inject } from '@angular/core';
import { Muscle } from '../../models/muscle';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MuscleFormData {
  isCreateForm: boolean;
  muscle: Muscle;
}

@Component({
  selector: 'app-muscle-form',
  templateUrl: './muscle-form.component.html',
  styleUrls: ['./muscle-form.component.scss'],
})
export class MuscleFormComponent {
  constructor(
    public dialogRef: MatDialogRef<MuscleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MuscleFormData
  ) {}
}
