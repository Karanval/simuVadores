export class ValuesGenerator {
    var PD = require("probability-distributions");

    // lambda es la cantidad esperada de llegadas de personas en ese tiempo dado
    // endTime es por cuanto tiempo se tiene que correr la generación de
    // variables en ms
    function getArrivals(lambda: number, endTime: number): number[] {
      var time: number = 0.0;
      var res = [];
      while (time <= endTime) {
        var dt = -Math.log(1 - Math.random()) / lambda;
        time = time + dt;
          res.push(time);
      }
      return res;
    }

    function getWeights(n: number): number[] {
      // uses: http://statisticsblog.com/probability-distributions/
      //PD.rnorm(10) // Array of 10 standard normal variates
      //PD.rnorm(20, -2, 3) // Array of 20 normal variates with mean -2 and standard deviation 3

      // 67.9 kg average weight adult in SA,
      // source https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-12-439

      return PD.rnorm(n, 67.9, 8.95);
    }

    //returns a number between 1 and floors
    function getFloor(floors: number): number {
      min = Math.ceil(1);
      max = Math.floor(floors+1);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // n =  how many numbers are required
    // floors = ammount of floors in the building
    function getNFloors(n: number, floors: number): number[] {
      var res = [];
      for ( var _i = 0; _i < numbers.length; _i++ ) {
        res[i] = getFloor(floors);
      }
      return res;
    }
