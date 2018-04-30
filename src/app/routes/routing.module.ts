import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AboutComponent } from '../about/about.component';
import { SimulationComponent } from '../simulation/simulation.component';

const routes: Routes = [
    { path: '', redirectTo: '/simu-vadores', pathMatch: 'full'},
    { path: 'simu-vadores', component: LayoutComponent, children: [
        { path: 'about', component: AboutComponent},
        { path: '', component: SimulationComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }