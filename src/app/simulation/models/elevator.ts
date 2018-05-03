import { Passenger } from './passenger';

export class Elevator {

    private capacity: number;
    private passengers: Passenger[];
    private currentFloor: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.passengers = new Array();
        this.currentFloor = 0;
    }

    public addPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    public removePassenger(passenger: Passenger): Passenger {
        let index = this.passengers.indexOf(passenger);
        return this.passengers.slice(index, 1)[0];
    }

    public isThereCapacity(): boolean {
        return this.passengers.length < this.capacity;
    }
}