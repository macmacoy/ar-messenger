import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotIphoneComponent } from './not-iphone.component';

describe('NotIphoneComponent', () => {
  let component: NotIphoneComponent;
  let fixture: ComponentFixture<NotIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
