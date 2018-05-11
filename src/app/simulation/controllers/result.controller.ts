import { Passenger } from "../models/passenger";

export class ResultController {

    private transportedPassengers: Array<Passenger>;

    constructor() {
        this.transportedPassengers = new Array();
    }

    public managePassengers(passengers: Array<Passenger>): void {
        passengers.forEach(element => this.transportedPassengers.push(element));
    }

    public getTransportedPassengers(): Array<Passenger> {
        return this.transportedPassengers;
    }
}