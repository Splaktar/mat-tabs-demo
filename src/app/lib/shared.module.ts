import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Mat components
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// Components
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, MatFormFieldModule,
    MatCheckboxModule, MatTabsModule, MatButtonModule, MatInputModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, MatFormFieldModule,
    MatCheckboxModule, MatTabsModule, MatButtonModule, MatInputModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [TabsComponent]
})
export class SharedModule {}
