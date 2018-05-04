import { Component, OnInit } from '@angular/core';
import { ValuesGenerator } from './generators/values.generator';
import { ElevatorController } from './controllers/elevator.controller';
import { Passenger } from './models/passenger';
import { ElevatorSystem } from './models/elevator.system';
import { Elevator } from './models/elevator';
import { Floor } from './models/floor';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  private floor0: Floor = new Floor(0);
  private floor1: Floor = new Floor(1);
  private floor2: Floor = new Floor(2);
  private floor3: Floor = new Floor(3);
  private floor4: Floor = new Floor(4);
  private flors: Array<Floor> = [this.floor0, this.floor1, this.floor2, this.floor3, this.floor4];
  private elevator: Elevator = new Elevator(10);
  private generator: ValuesGenerator = new ValuesGenerator(4);
  private elevatorSistem: ElevatorSystem = new ElevatorSystem(this.elevator, this.flors);
  private elevatorController: ElevatorController = new ElevatorController(this.elevatorSistem);
  private passenger1: Passenger = new Passenger(this.elevatorController, this.generator);
  private passenger2: Passenger = new Passenger(this.elevatorController, this.generator);
  private passenger3: Passenger = new Passenger(this.elevatorController, this.generator);

  constructor() { }

  ngOnInit() {
    this.passenger1.run();
    this.passenger2.run();
    this.passenger3.run();
  }

}
