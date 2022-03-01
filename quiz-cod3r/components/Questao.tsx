import QuestaoModel from '../model/questao';
import styles from '../src/styles/Questao.module.css';
import Enunciado from '../components/Enunciado';
import Resposta from '../components/Resposta';

interface QuestaoProps {
  value: QuestaoModel;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.value;
  function renderizarRespostas() {
    return questao.respostas.map((resp, i) => {
      return (
        <Resposta key={i} value={resp} indice={i} letra="a" corDeFundo="#fff" />
      );
    });
  }

  return (
    <div className={`centralizado ${styles.questao}`}>
      Questao
      <Enunciado value={questao.enunciado} />
      <div className={styles.respostas}>{renderizarRespostas()}</div>
    </div>
  );
}
