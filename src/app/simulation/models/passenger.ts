import { ElevatorController } from '../controllers/elevator.controller';
import { ValuesGenerator } from '../generators/values.generator';

export class Passenger {

    private currentFloor: number;
    private targetFloor: number;
    private weight: number;

    private elevatorController: ElevatorController;
    private generator: ValuesGenerator;

    constructor(elevatorController: ElevatorController, generator: ValuesGenerator) {
        this.elevatorController = elevatorController;
        this.generator = generator;
        this.currentFloor = generator.getFloor();
        this.targetFloor = generator.getFloor();
        this.weight = generator.getWeight();
    }

    public run() {
        this.elevatorController.callElevator(this.currentFloor);
    }

    public getCurrentFloor(): number {
        return this.currentFloor;
    }

    public getTargetFloor(): number {
        return this.targetFloor;
    }

    public getWeight(): number {
        return this.weight;
    }

}