import ServicoModel from "../models/ServicoModel";
import styles from "../src/styles/Servicos.module.css";
interface ServicosProps {
  value: ServicoModel;
  onChange: (servicoNovo: ServicoModel) => void;
}

export default function Servicos(props: ServicosProps) {
  const servico = props.value;
  const selecao = (e) => props.onChange(servico.ativar());

  const estiloAtivo = servico.ativo ? styles.ativo : styles.desativo;

  return (
    <button onClick={selecao} className={`${styles.botao} ${estiloAtivo}`}>
      {servico.conteudo}
    </button>
  );
}
