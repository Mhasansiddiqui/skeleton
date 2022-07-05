import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnisexComponent } from './anatomy/unisex/unisex.component';

const routes: Routes = [
  {
    path: '',
    component: UnisexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
