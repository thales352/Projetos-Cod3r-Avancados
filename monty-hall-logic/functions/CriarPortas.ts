/* eslint-disable import/no-anonymous-default-export */
import { PortaModel } from "../model/porta";

export default (qtde:number,selecionada:number):PortaModel[] => {
  return Array.from({length:qtde},(_,i)=>{
      const num = i+1
      const temPresente =num === selecionada
      return new PortaModel(num,temPresente)
  })
};
export const atualizarPortas = (portas:PortaModel[],modificada:PortaModel):PortaModel[] => {
  return portas.map((portaAtual)=>{
    const igualModificada = portaAtual.numero === modificada.numero
    if (igualModificada){
      return modificada
    }
    return portaAtual
  })



}