import { Component, OnInit, Input } from '@angular/core';
import { SimulationEngine } from '../simulation-engine/simulation.engine';

@Component({
  selector: 'app-simu-config',
  templateUrl: './simu-config.component.html',
  styleUrls: ['./simu-config.component.css']
})
export class SimuConfigComponent implements OnInit {

  @Input()
  private simulationEngine: SimulationEngine;

  submitted = false;

  capacidad: number = 5;
  pisos: number = 5;
  ascensores: number = 1;
  poblacion: number = 15;

  uppeak: boolean;
  uppeak_inicio: string;
  uppeak_fin: string;
  uppeak_cant: number;

  downpeak: boolean;
  downpeak_inicio: string;
  downpeak_fin: string;
  downpeak_cant: number;

  lunchpeak: boolean;
  lunchpeak_inicio: string;
  lunchpeak_fin: string;
  lunchpeak_cant: number;

  interfloor: boolean;
  interfloor_inicio: string;
  interfloor_fin: string;
  interfloor_cant: number;
  // por ahora solo hay un elevador, pensar en como hacer esto cuando se use la config que se da
  taxi: boolean;
  bus: boolean;
  secciones: boolean;
  secIni: number;
  secFin: number;
  parImpar: boolean;  
  par:boolean;
  impar:boolean;

  
  constructor() { }

  onSubmit() { 
    this.submitted = true; 
    document.getElementById("demo").innerHTML = this.export_data();
  }

  export_data(){
    if (this.submitted) {
      var obj = {"capacidad":this.capacidad, "pisos":this.pisos, "ascensores":this.ascensores,
                  "uppeak":this.uppeak, "uppeak_inicio":this.uppeak_inicio, 
                  "uppeak_fin":this.uppeak_fin, "uppeak_cant":this.uppeak_cant,
                  "downpeak":this.downpeak, "downpeak_inicio":this.downpeak_inicio, 
                  "downpeak_fin":this.downpeak_fin, "downpeak_cant":this.downpeak_cant,
                  "lunchpeak":this.lunchpeak, "lunchpeak_inicio":this.lunchpeak_inicio, 
                  "lunchpeak_fin":this.lunchpeak_fin, "lunchpeak_cant":this.lunchpeak_cant,
                  "interfloor":this.interfloor, "interfloor_inicio":this.interfloor_inicio, 
                  "interfloor_fin":this.interfloor_fin, "interfloor_cant":this.interfloor_cant,
                  "taxi":this.taxi, "bus":this.bus, "secciones":this.secciones, "secIni":this.secIni,
                  "secFin":this.secFin, "parImpar":this.parImpar, "par":this.par, "impar":this.impar
                }
      return JSON.stringify(obj);
    }
    return "Form not submitted yet"
  }
  ngOnInit() {
  }

  run() {
    this.simulationEngine.build(this.capacidad, this.pisos, this.poblacion);
    this.simulationEngine.start();
    this.simulationEngine.run();
    //this.simulationEngine.shutDown();
  }
}