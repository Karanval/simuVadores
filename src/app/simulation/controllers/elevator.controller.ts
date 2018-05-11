import { ElevatorSystemTaxi } from "../models/elevator.system.taxi";

export class ElevatorController {

    private elevatorSystemTaxi: ElevatorSystemTaxi;

    constructor(elevatorSystem: ElevatorSystemTaxi) {
        this.elevatorSystemTaxi = elevatorSystem;
    }

    public callElevator(targetFloor: number) {
        console.log(targetFloor);
        this.elevatorSystemTaxi.setTargetFloor(targetFloor);
    }
}