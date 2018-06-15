import { Passenger } from "../models/passenger";

export class ResultController {

    private transportedPassengers: Array<Passenger>;
    private startTime = 0;
    public tiempoPromedio: number;
    public pesoPromedio: number;

    constructor() {
        this.transportedPassengers = new Array();
    }

    public managePassengers(passengers: Array<Passenger>): void {
        passengers.forEach(element => {
            this.transportedPassengers.push(element)
        });
    }

    public getTransportedPassengers(): Array<Passenger> {
        return this.transportedPassengers;
    }

    public refresh() {
        let pesoAcomulado = 0;
        let tiempoAcomulado = 0;

        this.transportedPassengers.forEach(
            current => {
                pesoAcomulado += current.getWeight();
                tiempoAcomulado += current.getTime();
            }
        );

        this.pesoPromedio = pesoAcomulado / this.transportedPassengers.length;
        this.tiempoPromedio = tiempoAcomulado / this.transportedPassengers.length;
    }
}