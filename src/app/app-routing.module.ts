import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnatomyComponent } from '@app/anatomy/anatomy.component';

const routes: Routes = [
  {
    path: '',
    component: AnatomyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
