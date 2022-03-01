export default class ServicoModel {
  #id: number;
  public get id(): number {
    return this.#id;
  }
  public set id(value: number) {
    this.#id = value;
  }
  #conteudo: string;
  public get conteudo(): string {
    return this.#conteudo;
  }
  public set conteudo(value: string) {
    this.#conteudo = value;
  }
  #ativo: boolean;
  public get ativo(): boolean {
    return this.#ativo;
  }
  public set ativo(value: boolean) {
    this.#ativo = value;
  }
  #imagem: string;
  public get imagem(): string {
    return this.#imagem;
  }
  public set imagem(value: string) {
    this.#imagem = value;
  }
  constructor(
    id: number,
    conteudo: string,
    ativo: boolean = false,
    imagem: string = "/natureza.jpg"
  ) {
    this.#id = id;
    this.#conteudo = conteudo;
    this.#ativo = ativo;
    this.#imagem = imagem;
  }

  ativar(): ServicoModel {
    return new ServicoModel(this.#id, this.#conteudo, true, this.#imagem);
  }
  desativar(): ServicoModel {
    return new ServicoModel(this.#id, this.#conteudo, false, this.#imagem);
  }
}
