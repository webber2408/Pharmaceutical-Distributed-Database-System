import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWiseComponent } from './company-wise.component';

describe('CompanyWiseComponent', () => {
  let component: CompanyWiseComponent;
  let fixture: ComponentFixture<CompanyWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
