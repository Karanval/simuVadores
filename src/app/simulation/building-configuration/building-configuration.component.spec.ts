import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingConfigurationComponent } from './building-configuration.component';

describe('BuildingConfigurationComponent', () => {
  let component: BuildingConfigurationComponent;
  let fixture: ComponentFixture<BuildingConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
