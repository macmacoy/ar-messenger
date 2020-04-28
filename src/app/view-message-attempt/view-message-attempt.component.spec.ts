import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMessageAttemptComponent } from './view-message-attempt.component';

describe('ViewMessageAttemptComponent', () => {
  let component: ViewMessageAttemptComponent;
  let fixture: ComponentFixture<ViewMessageAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMessageAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMessageAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
