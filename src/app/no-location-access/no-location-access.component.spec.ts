import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLocationAccessComponent } from './no-location-access.component';

describe('NoLocationAccessComponent', () => {
  let component: NoLocationAccessComponent;
  let fixture: ComponentFixture<NoLocationAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLocationAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLocationAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
