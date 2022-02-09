import { useState } from 'react';
import { Presente, Porta } from '../../components/All';
import CriarPortas, { atualizarPortas } from '../../functions/CriarPortas';
import { PortaModel } from '../../model/porta';

export default function Index(second) {
  const [portaStates, setPorta] = useState(CriarPortas(3,2));


  function render() {
    return portaStates.map((porta)=>{
      return <Porta key={porta.numero} value={porta} onChange={(novaPorta)=>setPorta(atualizarPortas(portaStates,novaPorta))}></Porta>}
    )}

  return (
    <div style={{display:"flex"}}>
      {render()}
      <Presente></Presente>
    </div>
  );
}
