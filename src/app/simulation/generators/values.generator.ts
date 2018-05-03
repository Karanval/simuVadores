export class ValuesGenerator {

    private maxValue: number;
    private minValue: number;

    constructor(maxValue: number) {
        this.minValue = 0;
        this.maxValue = maxValue + 1;
    }

    //generar un valor entero desde 0 hasta su valor maximo - 1
    public getValue(): number {
        return Math.floor(Math.random() * (this.maxValue - this.minValue)) + this.minValue;
    }
}