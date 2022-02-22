import Questao from '../../components/Questao';
import QuestaoModel from '../../model/questao';
import RespostaModel from '../../model/resposta';

export default function Index() {
  return (
    <>
      <Questao
        value={
          new QuestaoModel(2, 'qual cor?', [
            RespostaModel.certa('azul'),
            RespostaModel.errada('Vermelho'),
          ])
        }
      />
    </>
  );
}
