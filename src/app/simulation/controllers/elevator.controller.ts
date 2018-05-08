import { ElevatorSystem } from "../models/elevator.system";

export class ElevatorController {

    private elevatorSystem: ElevatorSystem;

    constructor(elevatorSystem: ElevatorSystem) {
        this.elevatorSystem = elevatorSystem;
    }

    public callElevator(targetFloor: number) {
        console.log(targetFloor);
        this.elevatorSystem.setTargetFloor(targetFloor);
    }
}