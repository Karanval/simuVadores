import { ElevatorController } from '../controllers/elevator.controller';
import { ValuesGenerator } from '../generators/values.generator';

export class Passenger {

    private currentFloor: number;
    private targetFloor: number;

    private elevatorController: ElevatorController;
    private generator: ValuesGenerator;

    constructor(elevatorController: ElevatorController, generator: ValuesGenerator) {
        this.elevatorController = elevatorController;
        this.generator = generator;
        this.currentFloor = generator.getValue();
        this.targetFloor = generator.getValue();
    }

    public locate(){}

    public run() {
        this.elevatorController.callElevator(this.currentFloor);
    }

}