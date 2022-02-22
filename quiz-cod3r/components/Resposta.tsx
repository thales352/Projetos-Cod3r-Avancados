import RespostaModel from '../model/resposta';
import styles from '../src/styles/Resposta.module.css';

interface RespostaProps {
  value: RespostaModel;
  indice: number;
  letra: string;
  corDeFundo: string;
}

export default function Resposta(props: RespostaProps) {
  const resposta = props.value;
  return (
    <div className={styles.container}>
      <div className={styles.containerDentro}>
        <div
          className={`${styles.frente} `}
          style={{ backgroundColor: props.corDeFundo }}
        >
          <div className={`${styles.letra} centralizado`}>{props.letra}</div>
          <div className={`${styles.resposta} centralizado`}>
            {resposta.valor}
          </div>
        </div>
        <div className={styles.verso}></div>
      </div>
    </div>
  );
}
