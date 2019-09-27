import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Mat components
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Components
import { MatTabComponent } from './matcomponent-ts/mattab';

@NgModule({
  declarations: [
    MatTabComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, MatFormFieldModule, MatCheckboxModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [MatTabComponent]
})
export class MatSharedModule { }
