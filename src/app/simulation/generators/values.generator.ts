import { DatosPasajero } from './values.datos-pasajero';

export class ValuesGenerator {

    private floors: number;
    private lambda: number;
    private endTime: number;
    private PD = require("probability-distributions");
    private index: number;
    private weights: Array<number>;

    constructor(floors, lambda, endTime) {
        this.floors = floors;
        this.lambda = lambda;
        this.endTime = endTime;
        this.index = 0;
    }

    public getObjetosGenerados(): DatosPasajero[] {
      var res: DatosPasajero[] = [];

      var llegadas: number[] = this.getArrivals();
      var n = llegadas.length;
      var pesos: number[] = this.calculateWeights(n);
      for (var _i = 0; _i < n; _i++) {
        var origen = this.getOrigen();
        var llegada = llegadas[_i];
        var peso = pesos[_i];
        var datos = new DatosPasajero(llegada, peso, origen, this.getDestino(origen));
        res.push(datos);
      }

      return res;
    }

    // lambda es la cantidad esperada de llegadas de personas en ese tiempo dado
    // endTime es por cuanto tiempo se tiene que correr la generación de
    // variables en ms
    public getArrivals(): number[] {
        var time: number = 0.0;
        var res = [];
        while (time <= this.endTime) {
            var dt = -Math.log(1 - Math.random()) / this.lambda;
            time = time + dt;
            res.push(time);
        }
        return res;
    }

    public calculateWeights(n: number): number[] {
        // uses: http://statisticsblog.com/probability-distributions/
        //PD.rnorm(10) // Array of 10 standard normal variates
        //PD.rnorm(20, -2, 3) // Array of 20 normal variates with mean -2 and standard deviation 3

        // 67.9 kg average weight adult in SA,
        // source https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-12-439
      return this.PD.rnorm(n, 67.9, 8.95);
    }

    public getWeight(): number {
        //return this.weights[this.index++];
        //console.log(this);
        //this.calculateWeights(5);
        return 67.9;
    }

    //returns a number between 1 and floor
    public getOrigen(): number {
        let min = Math.ceil(0);
        let max = Math.floor(this.floors + 1);
        var res = Math.floor(Math.random() * (max - min)) + min;
        return res;
    }

    //returns a number between 1 and floor
    public getDestino(origen: number): number {
        let min = Math.ceil(0);
        let max = Math.floor(this.floors + 1);
        var res = Math.floor(Math.random() * (max - min)) + min;
        if(res == origen) {
          res = this.getDestino(origen);
        }
        return res;
    }
}
