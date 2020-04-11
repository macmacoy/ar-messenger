import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfRangeComponent } from './out-of-range.component';

describe('OutOfRangeComponent', () => {
  let component: OutOfRangeComponent;
  let fixture: ComponentFixture<OutOfRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
