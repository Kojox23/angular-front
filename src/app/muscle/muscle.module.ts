import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuscleRoutingModule } from './muscle-routing.module';
import { MuscleComponent } from './muscle.component';
import { SharedModule } from '../shared/shared.module';
import { MuscleListComponent } from './pages/muscle-list/muscle-list.component';

@NgModule({
  declarations: [MuscleComponent, MuscleListComponent],
  imports: [CommonModule, MuscleRoutingModule, SharedModule],
})
export class MuscleModule {}
