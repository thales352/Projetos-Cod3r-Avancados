import QuestaoModel from '../model/questao';
import styles from '../src/styles/Questao.module.css';

interface QuestaoProps {
  value: QuestaoModel;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.value;

  return <div className={`centralizado ${styles.questao}`}></div>;
}
