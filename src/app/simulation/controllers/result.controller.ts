import { Passenger } from "../models/passenger";

export class ResultController {

    public managePassengers(passengers: Array<Passenger>) {
        if (passengers.length > 0) {
            console.log(passengers);
        }
    }
}