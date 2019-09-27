import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MATPageComponent } from './matpage.component';

describe('matPageComponent', () => {
  let component: MATPageComponent;
  let fixture: ComponentFixture<MATPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MATPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MATPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
