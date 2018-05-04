import { Elevator } from './elevator';
import { Passenger } from './passenger';

export class Floor {

    private floorNumber: number;
    private elevator: Elevator;
    private passengers: Array<Passenger> = [];

    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
    }

    public getFloorNumber(): number {
        return this.floorNumber;
    }

    public addPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    public removePassenger(passenger: Passenger): Passenger {
        let index = this.passengers.indexOf(passenger);
        return this.passengers.slice(index, 1)[0];
    }

    public setElevator(elevator: Elevator) {
        this.elevator = elevator;
    }

    public removeElevator(): Elevator {
        let current = this.elevator;
        this.elevator = null;
        return current;
    }
}
