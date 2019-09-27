import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatdemoRoutingModule } from './matdemo-routing.module';
import { MatSharedModule } from '../matlibrary/matshared.module';

import { MATPageComponent } from './matpage/matpage.component';


@NgModule({
  declarations: [MATPageComponent],
  imports: [
    CommonModule, MatdemoRoutingModule, MatSharedModule
  ]
})
export class MatdemoModule { }
