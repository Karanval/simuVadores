import { Elevator } from './elevator';
import { Floor } from './floor';
import { Passenger } from './passenger';
import { ValuesGenerator } from '../generators/values.generator';
import { ResultController } from '../controllers/result.controller';
import { TaxiTrafficController } from '../controllers/taxi.traffic.controller';

export class ElevatorSystemTaxi {

    private UP_VALUE: number = 1;
    private DOWN_VALUE: number = -1;
    private WAITHING_VALUE: number = -1;
    private floors: Array<Floor>;
    private elevator: Elevator;
    private target: number;
    private currentFloor: number;
    private increment: number;
    private taxiTrafficController: TaxiTrafficController;

    constructor(elevator: Elevator, floors: Array<Floor>, resultController: ResultController) {
        this.floors = floors;
        this.elevator = elevator;
        this.taxiTrafficController = new TaxiTrafficController(resultController);
        this.currentFloor = 0; //hardcode
        this.increment = this.UP_VALUE;//hardcode
        this.floors[this.currentFloor].setElevator(elevator);
    }

    public setTargetFloor(targetFloor: number) {
        console.log("_________________________");
        console.log(this.currentFloor + " => " + targetFloor);
        this.target = targetFloor;
        if(this.currentFloor == this.target) {
            this.notifyPassengers(this.elevator, this.floors[this.currentFloor]);
            this.updateTarget();
        } else {
            this.moveElevator();
        }
    }

    public moveElevator() {
        this.validateElevatorDirection();
        this.elevator = this.floors[this.currentFloor].removeElevator(this.elevator);
        this.currentFloor = this.currentFloor + this.increment;
        let floor: Floor = this.floors[this.currentFloor];
        floor.setElevator(this.elevator);
        this.notifyPassengers(this.elevator, floor);
        this.updateTarget();
        if (this.target != this.WAITHING_VALUE) {
            this.moveElevator();
        }
    }

    public notifyPassengers(elevator: Elevator, floor: Floor) {
        console.log(floor.getFloorNumber() + " => ");
        if (this.target == this.currentFloor) {
            this.taxiTrafficController.passPassengers(elevator, floor);
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
        let lastUp = this.currentFloor < this.target && this.increment == this.UP_VALUE;
        let lastDown = this.currentFloor > this.target && this.increment == this.DOWN_VALUE;
        return lastDown || lastUp;
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