
export class DatosPasajero {
  private tiempoLlegada: number;
  private peso: number;
  private pisoOrigen: number;
  private pisoDestino: number;

  constructor(tiempoLlegada, peso, pisoOrigen, pisoDestino) {
      this.tiempoLlegada = tiempoLlegada;
      this.peso = peso;
      this.pisoOrigen = pisoOrigen;
      this.pisoDestino = pisoDestino;
  }

  public getPeso(): number { return this.peso; }
  public getPisoOrigen(): number { return this.pisoOrigen; }
  public getPisoDestino(): number { return this.pisoDestino; }
  public getTiempoLlegada(): number { return this.tiempoLlegada; }
}
