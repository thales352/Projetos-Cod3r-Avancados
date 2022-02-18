import Embaralhar from '../functions/embaralhar';
import RespostaModel from './resposta';

export default class QuestaoModel {
  #id: number;
  public get id(): number {
    return this.#id;
  }
  public set id(value: number) {
    this.#id = value;
  }
  #enunciado: string;
  public get enunciado(): string {
    return this.#enunciado;
  }
  public set enunciado(value: string) {
    this.#enunciado = value;
  }
  #respostas: RespostaModel[];
  public get respostas(): RespostaModel[] {
    return this.#respostas;
  }
  public set respostas(value: RespostaModel[]) {
    this.#respostas = value;
  }
  #acertou: boolean;
  public get acertou(): boolean {
    return this.#acertou;
  }
  public set acertou(value: boolean) {
    this.#acertou = value;
  }
  //FIXME: IMPLEMENTAR ESSE MÉTODO
  #respondida: boolean;
  public get respondida(): boolean {
    return !!this.#respostas.find((resposta) => resposta.revelada);
  }
  public set respondida(value: boolean) {
    this.#respondida = value;
  }

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou: boolean = false
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }
  resposta(indice: number): QuestaoModel {
    const acertou = this.#respostas[indice]?.certa;
    const respostas = this.#respostas.map((resp, i) => {
      const selecionada = indice === i;
      const deveRevelar = selecionada || resp.certa;
      return deveRevelar ? resp.revelar() : resp;
    });
    return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou);
  }
  embaralharResposta(): QuestaoModel {
    let respostas = Embaralhar(this.#respostas);
    return new QuestaoModel(
      this.#id,
      this.#enunciado,
      respostas,
      this.#acertou
    );
  }
  toObject() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map((resp) => resp.toObject()),
      acertou: this.#acertou,
    };
  }
}
