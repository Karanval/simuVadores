import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.css']
})
export class ElevatorComponent implements OnInit {
  secciones: boolean ;
  pairImpair: boolean;
  constructor() { }

  ngOnInit() {
  }

}
