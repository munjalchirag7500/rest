import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtableComponent } from './viewtable.component';

describe('ViewtableComponent', () => {
  let component: ViewtableComponent;
  let fixture: ComponentFixture<ViewtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
