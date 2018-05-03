import { Passenger } from './passenger';

export class Floor {

    private floorNumber: number;
    private TOTAL_TO_REMOVE: number = 1;
    private passengers: Array<Passenger> = [];

    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
    }

    public addPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    public removePassenger(passenger: Passenger): Passenger {
        let index = this.passengers.indexOf(passenger);
        return this.passengers.slice(index, this.TOTAL_TO_REMOVE)[0];
    }
}
