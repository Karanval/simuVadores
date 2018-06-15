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
        console.log("tl: "+this.datos.getTiempoLlegada()+"  "+(this.datos.getTiempoLlegada()*720));
        return this.datos.getTiempoLlegada()*720;
    }

    public getTimeHr(): string {
        var time = this.getTime();
        var hora = Math.floor(time/60)+8;//starts at 8
        var min = Math.floor(time%60);
        if(min<10) 
            return ""+hora+":0"+min;
        return ""+hora+":"+min;
    }

}
