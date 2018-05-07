import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficPaternsComponent } from './traffic-paterns.component';

describe('TrafficPaternsComponent', () => {
  let component: TrafficPaternsComponent;
  let fixture: ComponentFixture<TrafficPaternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficPaternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficPaternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
