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

    private floor0: Floor;
    private floor1: Floor;
    private floor2: Floor;
    private floor3: Floor;
    private floor4: Floor;
    private floors: Array<Floor>;

    private resultController: ResultController;
    private elevator: Elevator;
    private generator: ValuesGenerator;
    private elevatorSystem: ElevatorSystemTaxi;
    private elevatorController: ElevatorController;

    private passengers: Array<Passenger>;

    constructor(resultController: ResultController) {
        this.resultController = resultController;
    }

    public start() {
        this.floor0 = new Floor(0);
        this.floor1 = new Floor(1);
        this.floor2 = new Floor(2);
        this.floor3 = new Floor(3);
        this.floor4 = new Floor(4);

        this.floors = [this.floor0, this.floor1, this.floor2, this.floor3, this.floor4];

        this.elevator = new Elevator(630);
        // entradas: floors lambda endTime
        this.generator = new ValuesGenerator(4, 10, 100);
        this.elevatorSystem = new ElevatorSystemTaxi(this.elevator, this.floors, this.resultController);
        this.elevatorController = new ElevatorController(this.elevatorSystem);

        this.passengers = new Array();
        let population = 5;
        var datos: DatosPasajero[] = this.generator.getObjetosGenerados();
        for (let i = 0; i < population; i++) {
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
        })
    }

    public shutDown() {
        this.floor0 = undefined;
        this.floor1 = undefined;
        this.floor2 = undefined;
        this.floor3 = undefined;
        this.floor4 = undefined;

        this.floors = undefined;

        this.resultController = undefined;
        this.elevator = undefined;
        this.generator = undefined;
        this.elevatorSystem = undefined;
        this.elevatorController = undefined;
    }
}
