import QuestaoModel from '../../../model/questao';
import RespostaModel from '../../../model/resposta';

const questoes: QuestaoModel[] = [
  new QuestaoModel(1, 'Qual inseto transmite a Doença de Chagas?', [
    RespostaModel.errada('Formiga'),
    RespostaModel.errada('Aedes Egypt'),
    RespostaModel.errada('Escorpião'),
    RespostaModel.certa('Barbeiro'),
  ]),
  new QuestaoModel(
    2,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada('Caju'),
      RespostaModel.errada('Coco'),
      RespostaModel.errada('Chuchu'),
      RespostaModel.certa('Abóbora'),
    ]
  ),
  new QuestaoModel(
    3,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada('Caju'),
      RespostaModel.errada('Coco'),
      RespostaModel.errada('Chuchu'),
      RespostaModel.certa('Abóbora'),
    ]
  ),
  new QuestaoModel(
    4,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada('Caju'),
      RespostaModel.errada('Coco'),
      RespostaModel.errada('Chuchu'),
      RespostaModel.certa('Abóbora'),
    ]
  ),
  new QuestaoModel(
    5,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada('Caju'),
      RespostaModel.errada('Coco'),
      RespostaModel.errada('Chuchu'),
      RespostaModel.certa('Abóbora'),
    ]
  ),
];
export default questoes;
