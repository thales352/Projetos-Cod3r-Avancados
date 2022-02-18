import questoes from './bancodequestoes';
import Embaralhar from '../../../functions/embaralhar';
export default function handler(req, res) {
  return res.status(200).json(Embaralhar(questoes.map((q) => q.id)));
}
