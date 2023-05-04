import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuscleRoutingModule } from './muscle-routing.module';
import { MuscleComponent } from './muscle.component';
import { SharedModule } from '../shared/shared.module';
import { MuscleListComponent } from './pages/muscle-list/muscle-list.component';
import { MuscleFormComponent } from './components/muscle-form/muscle-form.component';
import { MuscleDetailsComponent } from './pages/muscle-details/muscle-details.component';
import { MuscleCardComponent } from './components/muscle-card/muscle-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    MuscleComponent,
    MuscleListComponent,
    MuscleFormComponent,
    MuscleDetailsComponent,
    MuscleCardComponent,
  ],
  imports: [
    MuscleRoutingModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class MuscleModule {}
