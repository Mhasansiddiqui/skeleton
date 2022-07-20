import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitalComponent } from '@app/features/vital-check/vital-check.component';
import { AnatomyComponent } from '@features/anatomy/anatomy.component';

const routes: Routes = [
  {
    path: '',
    component: VitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
