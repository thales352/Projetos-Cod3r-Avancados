import Questoes from './bancodequestoes';

export default function handler(req, res) {
  const {
    query: { questoes: id },
  } = req;
  const [questaoPesquisada] = Questoes.filter((q) => q.id == id);
  if (!questaoPesquisada) res.status(204).send();
  res.status(200).json(questaoPesquisada.embaralharResposta().toObject());
}
