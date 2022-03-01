import ServicoModel from "../models/ServicoModel";

export default function ControleServicos(
  list: ServicoModel[],
  clicado: ServicoModel
): ServicoModel[] {
  const listaFinal = list.map((serv) => {
    const modificado = serv.id === clicado.id;
    if (!modificado) return serv.desativar();
    return serv.ativar();
  });
  return listaFinal;
}
