import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './routes/routing.module';
import { AboutComponent } from './about/about.component';
import { SimulationComponent } from './simulation/simulation.component';

import { ElevatorComponent } from './simulation/elevator/elevator.component';
import { SimuConfigComponent } from './simulation/simu-config/simu-config.component';
import { BuildingConfigurationComponent } from './simulation/building-configuration/building-configuration.component';
import { TrafficPaternsComponent } from './simulation/traffic-paterns/traffic-paterns.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutComponent,
    SimulationComponent,
    ElevatorComponent,
    SimuConfigComponent,
    BuildingConfigurationComponent,
    TrafficPaternsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
