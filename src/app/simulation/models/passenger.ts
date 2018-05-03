import { ValuesGenerator } from '../generators/values.generator';

export class Passenger {

    private generator: ValuesGenerator;

    public setGenerator(generator: ValuesGenerator) {
        this.generator = generator;
    }
}