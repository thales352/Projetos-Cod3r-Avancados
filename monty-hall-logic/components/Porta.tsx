import { PortaModel } from '../model/porta';
import styles from '../src/styles/Porta.module.css';
interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel)=> void
}

export default function Porta(props:PortaProps) {
  const porta = props.value
  const selecao = porta.selecionada && !porta.aberta ? styles.selecionada : '';
  const alternarSelecao = e=> props.onChange(porta.alternarSelecao())
  const abrir = e=> {
    e.stopPropagation()
    props.onChange(porta.abrir())}

  function mostrarPorta(){
    return (<div className={styles.porta}>
      <div className={styles.numero}>{porta.numero}</div>
      <div className={styles.macaneta} onClick={abrir}></div>
    </div>)
  }


  return (
    <div className={styles.area}>
      <div className={`${styles.selecao} ${selecao}`}></div>
      <div className={styles.portal} onClick={alternarSelecao}>
        {porta.aberta?false:mostrarPorta()}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
