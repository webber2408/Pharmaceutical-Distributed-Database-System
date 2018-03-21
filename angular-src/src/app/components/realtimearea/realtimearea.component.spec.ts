import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeareaComponent } from './realtimearea.component';

describe('RealtimeareaComponent', () => {
  let component: RealtimeareaComponent;
  let fixture: ComponentFixture<RealtimeareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
