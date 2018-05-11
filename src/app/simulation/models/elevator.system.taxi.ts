import { Elevator } from './elevator';
import { Floor } from './floor';
import { Passenger } from './passenger';
import { ValuesGenerator } from '../generators/values.generator';
import { TraficController } from '../controllers/trafic.controller';

export class ElevatorSystemTaxi {

    private UP_VALUE: number = 1;
    private DOWN_VALUE: number = -1;
    private WAITHING_VALUE: number = -1;
    private floors: Array<Floor>;
    private target: number;
    private currentFloor: number;
    private increment: number;
    private traficController: TraficController;

    constructor(elevator: Elevator, floors: Array<Floor>, traficController: TraficController) {
        this.floors = floors;
        this.traficController = traficController;
        this.currentFloor = 0; //hardcode
        this.increment = this.UP_VALUE;//hardcode
        this.floors[0].setElevator(elevator);
    }

    public setTargetFloor(numberFloor: number) {
        console.log("_________________________");
        console.log(this.currentFloor + " => " + numberFloor);
        this.target = numberFloor;
        this.moveElevator();
    }

    public moveElevator() {
        this.validateElevatorDirection();
        let elevator: Elevator = this.floors[this.currentFloor].removeElevator();
        this.currentFloor = this.currentFloor + this.increment;
        let floor: Floor = this.floors[this.currentFloor];
        floor.setElevator(elevator);
        this.notifyPassengers(elevator, floor);
        this.updateTarget();
        if (this.target != this.WAITHING_VALUE) {
            this.moveElevator();
        }
    }

    public notifyPassengers(elevator: Elevator, floor: Floor) {
        console.log(floor.getFloorNumber() + " => ");
        if (this.target == this.currentFloor) {
            this.traficController.passPassengers(elevator, floor);
        }
    }

    private validateElevatorDirection(): void {
        if (!this.isValidFloor(this.currentFloor + this.increment)
            || !this.isDirectionOfTheTarget()) {
            this.changeElevatorDirection();
        }
    }

    private isValidFloor(floor: number): boolean {
        return floor != -1 && floor < this.floors.length;
    }

    private isDirectionOfTheTarget(): boolean {
        let sameFloor = (this.currentFloor + this.increment) == this.currentFloor;
        let lastUp = this.currentFloor < this.target && this.increment == this.UP_VALUE;
        let lastDown = this.currentFloor > this.target && this.increment == this.DOWN_VALUE;
        return sameFloor || lastDown || lastUp;
    }

    private changeElevatorDirection(): void {
        if (this.increment == this.UP_VALUE) {
            this.increment = this.DOWN_VALUE;
        } else if (this.increment == this.DOWN_VALUE) {
            this.increment = this.UP_VALUE;
        }
    }

    private updateTarget() {
        if (this.target == this.currentFloor) {
            this.target = this.WAITHING_VALUE;
        }
    }
}