import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLandingPageComponent } from './message-landing-page.component';

describe('MessageLandingPageComponent', () => {
  let component: MessageLandingPageComponent;
  let fixture: ComponentFixture<MessageLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
