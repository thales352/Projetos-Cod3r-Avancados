export class PortaModel {
  #numero:number;
  get numero() {
    return this.#numero;
  }
  set numero(value) {
    this.#numero = value;
  }
  #temPresente:boolean;
  get temPresente() {
    return this.#temPresente;
  }
  set temPresente(value) {
    this.#temPresente = value;
  }
  #selecionada:boolean;
  get selecionada() {
    return this.#selecionada;
  }
  set selecionada(value) {
    this.#selecionada = value;
  }
  #aberta:boolean;
  get aberta() {
    return this.#aberta;
  }
  set aberta(value) {
    this.#aberta = value;
  }

  constructor(
    numero:number,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }
  desselecionar() {
    const selecao = false;
    return new PortaModel(this.numero, this.temPresente, selecao, this.aberta);
  }
  alternarSelecao() {
    const selecao = !this.selecionada;
    return new PortaModel(this.numero, this.temPresente, selecao, this.aberta);
  }
  abrir() {
    const aberta = true;
    return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta);
  }
}
