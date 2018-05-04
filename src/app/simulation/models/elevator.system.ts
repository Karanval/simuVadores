import { Elevator } from './elevator';
import { Floor } from './floor';
import { Passenger } from './passenger';
import { ValuesGenerator } from '../generators/values.generator';

export class ElevatorSystem {

    private elevator: Elevator;
    private floors: Array<Floor>;
    private targets: Array<number>;
    private elevatorPosition;

    constructor(elevator: Elevator, floors: Array<Floor>) {
        this.elevator = elevator;
        this.floors = floors;
        this.elevatorPosition = 0; //hardcode
        this.targets = new Array();
        this.sortFloors(this.sortLowerToHigher);
        this.floors[0].setElevator(this.elevator);
    }
    /**
     * ordenar pisos/
     * implementar movimiento/
     * crear entidad de control de pasajeros
     * mejorar el movimiento en pisos tope
     */

    public setTargetFloor(numberFloor: number) {

    }

    public moveElevator(targetFloor: number) {
        if (this.elevatorPosition < this.floors.length) {
            let elevator = this.floors[this.elevatorPosition].removeElevator();
            this.floors[++this.elevatorPosition].setElevator(elevator);
        }
    }

    public notifyPassengers() {

    }

    private sortFloors(sortFunction) {

    }

    private sortLowerToHigher(floor: Floor, other: Floor) {
        return floor.getFloorNumber() - other.getFloorNumber();
    }

    private sortHigherToLower(floor: Floor, other: Floor) {
        return other.getFloorNumber() - floor.getFloorNumber();
    }


}