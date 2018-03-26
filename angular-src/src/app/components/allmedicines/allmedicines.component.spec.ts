import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmedicinesComponent } from './allmedicines.component';

describe('AllmedicinesComponent', () => {
  let component: AllmedicinesComponent;
  let fixture: ComponentFixture<AllmedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
