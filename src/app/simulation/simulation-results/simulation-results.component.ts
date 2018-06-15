import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../models/passenger';

@Component({
  selector: 'app-simulation-results',
  templateUrl: './simulation-results.component.html',
  styleUrls: ['./simulation-results.component.css']
})
export class SimulationResultsComponent implements OnInit {

  @Input()
  private transportedPassengers: Array<Passenger>;

  @Input()
  private pesoPromedio: number;

  @Input()
  private tiempoPromedio: number;

  constructor() { }

  ngOnInit() {
  }

}
