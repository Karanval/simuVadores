import { Component, OnInit } from '@angular/core';
import { ResultController } from './controllers/result.controller';
import { SimulationEngine } from './simulation-engine/simulation.engine';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  private simulationEngine: SimulationEngine;
  private resultController: ResultController;

  constructor() {
    this.resultController = new ResultController();
    this.simulationEngine = new SimulationEngine(this.resultController);
  }

  ngOnInit() {
    this.simulationEngine.start();
    this.simulationEngine.run();
    this.simulationEngine.shutDown();
  }

}
