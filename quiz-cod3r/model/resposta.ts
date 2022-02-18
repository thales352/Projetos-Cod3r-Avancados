export default class RespostaModel {
  #valor: string;
  public get valor(): string {
    return this.#valor;
  }
  public set valor(value: string) {
    this.#valor = value;
  }
  #certa: boolean;
  public get certa(): boolean {
    return this.#certa;
  }
  public set certa(value: boolean) {
    this.#certa = value;
  }
  #revelada: boolean;
  public get revelada(): boolean {
    return this.#revelada;
  }
  public set revelada(value: boolean) {
    this.#revelada = value;
  }

  constructor(valor: string, certa: boolean, revelada: boolean = false) {
    this.#valor = valor;
    this.#certa = certa;
    this.#revelada = revelada;
  }
  static certa(resposta: string): RespostaModel {
    return new RespostaModel(resposta, true);
  }
  static errada(resposta: string): RespostaModel {
    return new RespostaModel(resposta, false);
  }
  revelar() {
    return new RespostaModel(this.#valor, this.#certa, true);
  }
  toObject() {
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada,
    };
  }
}
