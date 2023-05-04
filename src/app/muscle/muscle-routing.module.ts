import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleComponent } from './muscle.component';

const routes: Routes = [
  {
    path: '',
    component: MuscleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuscleRoutingModule {}
