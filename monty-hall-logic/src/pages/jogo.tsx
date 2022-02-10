import Link from 'next/link';
import { useState } from 'react';
import { Porta } from '../../components/All';
import CriarPortas, { atualizarPortas } from '../../functions/CriarPortas';
import styles from '../styles/Jogo.module.css'


export default function Index(second) {
  const [portaStates, setPorta] = useState(CriarPortas(4,2));


  function render() {
    return portaStates.map((porta)=>{
      return <Porta key={porta.numero} value={porta} onChange={(novaPorta)=>setPorta(atualizarPortas(portaStates,novaPorta))}></Porta>}
    )}

  return (
    <div className={styles.Jogo}>
     <div className={styles.portas}>
        {render()}
     </div>
     <div className={styles.botoes}>
         <Link href="/" passHref>
             <button className={styles.button}>Ínicio</button>
         </Link>
     </div>
    </div>
  );
}
