import questoes from './bancodequestoes';
export default function handler(req, res) {
  return res.status(200).json(questoes.map((q) => q.id));
}
