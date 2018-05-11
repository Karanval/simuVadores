import { ElevatorController } from '../controllers/elevator.controller';
import { DatosPasajero } from '../generators/values.datos-pasajero';

export class Passenger {

    private currentFloor: number;
    private targetFloor: number;
    private weight: number;

    private elevatorController: ElevatorController;
    private datos: DatosPasajero;

    constructor(elevatorController: ElevatorController, datos: DatosPasajero) {
        this.elevatorController = elevatorController;
        this.datos = datos;
    }

    public run() {
        this.elevatorController.callElevator(this.currentFloor);
    }

    public getCurrentFloor(): number {
        return this.datos.getPisoOrigen();
    }

    public getTargetFloor(): number {
        return this.datos.getPisoDestino();
    }

    public getWeight(): number {
        return this.datos.getPeso();
    }

}
