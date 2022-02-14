/* eslint-disable import/no-anonymous-default-export */
import { PortaModel } from '../model/porta';

export default (qtde: number, comPresente: number): PortaModel[] => {
  return Array.from({ length: qtde }, (_, i) => {
    const num = i + 1;
    const temPresente = num === comPresente;
    return new PortaModel(num, temPresente);
  });
};
export const atualizarPortas = (
  portas: PortaModel[],
  modificacao: PortaModel
): PortaModel[] => {
  let portaAleatoria = portas.find(
    (porta) =>
      !porta.aberta &&
      !porta.temPresente &&
      !(porta.numero === modificacao.numero)
  );

  return portas.map((portaAntiga) => {
    const igualModificada = portaAntiga.numero === modificacao.numero;
    const igualAleatoria = portaAntiga.numero === portaAleatoria?.numero;
    if (igualAleatoria) {
      portaAntiga = portaAntiga.abrir();
    }
    if (!igualModificada) {
      return modificacao.aberta ? portaAntiga : portaAntiga.desselecionar();
    }
    return modificacao;
  });
};
