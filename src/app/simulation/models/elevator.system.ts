import { Elevator } from './elevator';
import { Floor } from './floor';
import { Passenger } from './passenger';
import { ValuesGenerator } from '../generators/values.generator';
import { TraficController } from '../controllers/trafic.controller';

export class ElevatorSystem {

    private UP_VALUE: number = 1;
    private DOWN_VALUE: number = -1;
    private floors: Array<Floor>;
    private targets: Array<number>;
    private currentFloor: number;
    private increment: number;
    private traficController: TraficController;

    constructor(elevator: Elevator, floors: Array<Floor>, traficController: TraficController) {
        this.floors = floors;
        this.traficController = traficController;
        this.currentFloor = 0; //hardcode
        this.increment = this.UP_VALUE;//hardcode
        this.targets = new Array();
        this.floors[0].setElevator(elevator);
    }

    public setTargetFloor(numberFloor: number) {
        console.log("_________________________");
        console.log(this.currentFloor + " => " + numberFloor);
        if (this.targets.indexOf(numberFloor) == -1) {
            this.targets.push(numberFloor);
            this.targets.sort((first, second) => { return first - second }); //ordenamos de menor a mayor
        }
        this.moveElevator();
    }

    public moveElevator() {
        this.validateElevatorDirection();
        let elevator: Elevator = this.floors[this.currentFloor].removeElevator();
        this.currentFloor = this.currentFloor + this.increment;
        let floor: Floor = this.floors[this.currentFloor];
        floor.setElevator(elevator);
        this.removeCurrentFloorOfTargets(floor.getFloorNumber());
        this.notifyPassengers(elevator, floor);
        if (this.targets.length > 0) {
            this.moveElevator();
        }
    }

    public notifyPassengers(elevator: Elevator, floor: Floor) {
        console.log(floor.getFloorNumber() + " => ");
        this.traficController.passPassengers(elevator, floor)
    }

    private isValidFloor(floor: number): boolean {
        return floor != -1 && floor < this.floors.length;
    }

    private validateElevatorDirection(): void {
        if (!this.isValidFloor(this.currentFloor + this.increment)
            || this.isLastTargetInADirection()) {
            this.changeElevatorDirection();
        }
    }

    private isLastTargetInADirection(): boolean {
        let value = this.currentFloor + this.increment;
        let lastDown = value < this.targets[0] && this.increment == this.DOWN_VALUE;
        let lastUp = value > this.targets[this.targets.length - 1] && this.increment == this.UP_VALUE;
        return lastDown || lastUp;
    }

    private changeElevatorDirection(): void {
        if (this.increment == this.UP_VALUE) {
            this.increment = this.DOWN_VALUE;
        } else if (this.increment == this.DOWN_VALUE) {
            this.increment = this.UP_VALUE;
        }
    }

    private removeCurrentFloorOfTargets(floorNumber: number): void {
        let index = this.targets.indexOf(floorNumber);
        if (index != -1) {
            this.targets.splice(index, 1);
        }
    }
}