import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MATPageComponent } from './matdemo/matpage/matpage.component';

const routes: Routes = [
  { path: '**', component: MATPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
