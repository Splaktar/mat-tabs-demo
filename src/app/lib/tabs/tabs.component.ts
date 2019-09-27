import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  template: `
    <form [formGroup]="form">
      <div class="sectionTabDiv">
        <div>
          <span class="example-input-label"> Selected tab index: </span>
          <mat-form-field>
            <input matInput type="number" [formControl]="selectedControl">
          </mat-form-field>
        </div>

        <div>
          <button mat-raised-button
                  class="example-add-tab-button"
                  (click)="addTab(selectAfterAdding.checked)">
            Add new tab
          </button>
          <mat-checkbox #selectAfterAdding> Select tab after adding</mat-checkbox>
        </div>
        <!--[selectedIndex]="selected.value"-->
        <mat-tab-group [selectedIndex]="selectedControl.value"
                       (selectedIndexChange)="selectedControl.setValue($event)">
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
export class TabsComponent {
  tabs = ['First', 'Second', 'Third'];
  selectedControl = new FormControl(0);
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      selected: this.selectedControl
    });
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selectedControl.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
