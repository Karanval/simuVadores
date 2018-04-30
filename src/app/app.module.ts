import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './routes/routing.module';
import { AboutComponent } from './about/about.component';
import { SimulationComponent } from './simulation/simulation.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutComponent,
    SimulationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
