import { Component, OnInit } from '@angular/core';
import { ValuesGenerator } from './generators/values.generator';
import { ElevatorController } from './controllers/elevator.controller';
import { Passenger } from './models/passenger';
import { ElevatorSystem } from './models/elevator.system';
import { Elevator } from './models/elevator';
import { Floor } from './models/floor';
import { TraficController } from './controllers/trafic.controller';
import { ResultController } from './controllers/result.controller';
import { SimulationEngine } from './simulation-engine/simulation.engine';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  private simulationEngine: SimulationEngine;

  constructor() { }

  ngOnInit() {
    this.simulationEngine = new SimulationEngine();
    this.simulationEngine.start();
    this.simulationEngine.run();
    this.simulationEngine.shutDown();
  }

}
