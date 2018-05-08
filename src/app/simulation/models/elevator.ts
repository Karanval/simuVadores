import { Passenger } from './passenger';

export class Elevator {

    private capacity: number;
    private passengers: Passenger[];

    constructor(capacity: number) {
        this.capacity = capacity;
        this.passengers = new Array();
    }

    public addPassenger(passenger: Passenger): boolean {

        if ((this.getActualWeight() + passenger.getWeight() <= this.capacity)) {
            this.passengers.push(passenger);
            return true;
        }
        return false;
    }

    public removePassenger(passenger: Passenger): Passenger {
        let index = this.passengers.indexOf(passenger);
        return this.passengers.slice(index, 1)[0];
    }

    public getActualWeight(): number {
        let actualWeight: number = 0;
        this.passengers.forEach(element => {
            actualWeight += element.getWeight();
        });
        return actualWeight;
    }

    public getPassengerTransported(floor: number): Array<Passenger> {
        let result: Array<Passenger> = new Array();
        let index = this.passengers.findIndex(element => {return element.getTargetFloor() == floor;});
        while(index != -1) {
            result.push(this.passengers.splice(index, 1)[0]);
            index = this.passengers.findIndex(element => {return element.getTargetFloor() == floor;});
        }
        return result;
    }
}