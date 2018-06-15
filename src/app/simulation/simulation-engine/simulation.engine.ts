import { Floor } from "../models/floor";
import { ResultController } from "../controllers/result.controller";
import { Elevator } from "../models/elevator";
import { ValuesGenerator } from "../generators/values.generator";
import { ElevatorSystemTaxi } from "../models/elevator.system.taxi";
import { ElevatorController } from "../controllers/elevator.controller";
import { Passenger } from "../models/passenger";
import { ArrayType } from "@angular/compiler/src/output/output_ast";
import { DatosPasajero } from '../generators/values.datos-pasajero';

export class SimulationEngine {

    private population: number;
    private floors: Array<Floor>;
    private time: number = 720; // total de minutos en 12 horas

    private resultController: ResultController;
    private elevator: Elevator;
    private generator: ValuesGenerator;
    private elevatorSystem: ElevatorSystemTaxi;
    private elevatorController: ElevatorController;

    private passengers: Array<Passenger>;

    constructor(resultController: ResultController) {
        this.resultController = resultController;
    }

    public build(capacidad, pisos, poblacion) {
        this.floors = new Array();
        for(let i = 0; i < pisos; i++){
            let current: Floor = new Floor(i);
            this.floors.push(current);
        }
        this.elevator = new Elevator(capacidad * 80);
        this.population = poblacion;
    }

    public start() {
        // entradas: floors lambda endTime
        this.generator = new ValuesGenerator(this.floors.length - 1, this.population, this.time);
        this.elevatorSystem = new ElevatorSystemTaxi(this.elevator, this.floors, this.resultController);
        this.elevatorController = new ElevatorController(this.elevatorSystem);

        this.passengers = new Array();
        var datos: DatosPasajero[] = this.generator.getObjetosGenerados();
        for (let i = 0; i < this.population; i++) {
            let passenger: Passenger = new Passenger(this.elevatorController, datos[i]);
            let passengerIndex = passenger.getCurrentFloor();
            this.floors[passengerIndex].addPassenger(passenger);
            this.passengers.push(passenger);
        }
        console.log(this.floors);
        console.log(this.passengers);
    }

    public run() {
        this.passengers.forEach(element => {
            element.run();
        });
        this.resultController.refresh();
    }

    public shutDown() {
        this.floors = undefined;

        this.resultController = undefined;
        this.elevator = undefined;
        this.generator = undefined;
        this.elevatorSystem = undefined;
        this.elevatorController = undefined;
    }
}
