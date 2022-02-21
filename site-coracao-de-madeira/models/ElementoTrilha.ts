export default class ElementoTrilhaModel {
  #id: number;
  public get id(): number {
    return this.#id;
  }
  public set id(value: number) {
    this.#id = value;
  }
  #imagem: string;
  public get imagem(): string {
    return this.#imagem;
  }
  public set imagem(value: string) {
    this.#imagem = value;
  }
  #titulo: string;
  public get titulo(): string {
    return this.#titulo;
  }
  public set titulo(value: string) {
    this.#titulo = value;
  }
}
