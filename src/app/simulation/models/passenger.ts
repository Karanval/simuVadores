import { ElevatorController } from '../controllers/elevator.controller';
import { DatosPasajero } from '../generators/values.datos-pasajero';

export class Passenger {

    private elevatorController: ElevatorController;
    private datos: DatosPasajero;

    constructor(elevatorController: ElevatorController, datos: DatosPasajero) {
        this.elevatorController = elevatorController;
        this.datos = datos;
    }

    public run() {
        this.elevatorController.callElevator(this.getCurrentFloor());
    }

    public runTarget() {
        this.elevatorController.callElevator(this.getTargetFloor());
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

    public getTime(): number {
        return this.datos.getTiempoLlegada();
    }

}
