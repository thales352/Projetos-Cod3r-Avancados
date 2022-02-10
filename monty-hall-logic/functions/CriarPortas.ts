/* eslint-disable import/no-anonymous-default-export */
import { PortaModel } from "../model/porta";

export default (qtde:number,selecionada:number):PortaModel[] => {
  return Array.from({length:qtde},(_,i)=>{
      const num = i+1
      const temPresente =num === selecionada
      return new PortaModel(num,temPresente)
  })
};
export const atualizarPortas = (portas:PortaModel[],modificacao:PortaModel):PortaModel[] => {
  return portas.map((portaAntiga)=>{
    const igualModificada = portaAntiga.numero === modificacao.numero
    if (!igualModificada){
      return modificacao.aberta?portaAntiga:portaAntiga.desselecionar()
    }
    return modificacao
  })



}