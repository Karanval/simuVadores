export class ValuesGenerator {

    private floors: number;
    private PD = require("probability-distributions");
    private index: number;
    private weights: Array<number>;

    constructor(floors) {
        this.floors = floors;
        this.index = 0;
    }


    // lambda es la cantidad esperada de llegadas de personas en ese tiempo dado
    // endTime es por cuanto tiempo se tiene que correr la generación de
    // variables en ms
    public getArrivals(lambda: number, endTime: number): number[] {
        var time: number = 0.0;
        var res = [];
        while (time <= endTime) {
            var dt = -Math.log(1 - Math.random()) / lambda;
            time = time + dt;
            res.push(time);
        }
        return res;
    }

    public calculateWeights(n: number): void {
        // uses: http://statisticsblog.com/probability-distributions/
        //PD.rnorm(10) // Array of 10 standard normal variates
        //PD.rnorm(20, -2, 3) // Array of 20 normal variates with mean -2 and standard deviation 3

        // 67.9 kg average weight adult in SA,
        // source https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-12-439
        this.weights = this.PD.rnorm(n, 67.9, 8.95);
    }

    public getWeight(): number {
        //return this.weights[this.index++];
        return 67.9;
    }

    /**
    / Devuelve un origen y un destino
    */
    public obtenerOrigenYDestino(floor: number): number[] {
      var res = [];
      var ori = getFloor(floor);
      var dest = getFloor(floor);
      if(ori != desr) {
        res.push(ori);
        res.push(dest);
      } else {
        dest = getFloor(floor);
      }
      return res;
    }

    //returns a number between 1 and floor
    public getFloor(floor: number): number {
        let min = Math.ceil(0);
        let max = Math.floor(this.floors + 1);
        var res = Math.floor(Math.random() * (max - min)) + min;
        if(res == floor) {
          res = getFloor(floor);
        }
        return res;
    }

    /** n =  how many numbers are required
    / floors = ammount of floors in the building
    / floor = current floor
    / @returns an array of n random numbers, each from 0 to n
    */
    public getNFloors(n: number): number[] {
        var res = [];
        for (var _i = 0; _i < n; _i++) {
            var num = this.getFloor();
            res.push(num);
        }
        return res;
    }
}
