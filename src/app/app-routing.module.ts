import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './demo/page/page.component';

const routes: Routes = [
  { path: '**', component: PageComponent }
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
