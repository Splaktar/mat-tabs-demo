import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat',
  template: `
    <form>
    <div class="sectionTabDiv">
    <div>
    <span class="example-input-label"> Selected tab index: </span>
    <mat-form-field>
      <input matInput type="number" [formControl]="selected">
    </mat-form-field>
  </div>

  <div>
    <button mat-raised-button
            class="example-add-tab-button"
            (click)="addTab(selectAfterAdding.checked)">
      Add new tab
    </button>
    <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>
  </div>
<!--[selectedIndex]="selected.value"-->
  <mat-tab-group [selectedIndex]="selected.value"
                 (selectedIndexChange)="selected.setValue($event)">
    <mat-tab *ngFor="let tab of tabs; let index = index" [label]="tab">
      Contents for {{tab}} tab

      <button mat-raised-button
              class="example-delete-tab-button"
              [disabled]="tabs.length === 1"
              (click)="removeTab(index)">
        Delete Tab
      </button>
    </mat-tab>
  </mat-tab-group>
    </div>
    </form>`,
  styles: [``]
})

export class MatTabComponent {
  constructor() {
  }
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
