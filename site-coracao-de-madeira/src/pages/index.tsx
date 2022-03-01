import Imagens from "../../components/Imagens";
import Servico from "../../components/Servicos";
import ControleServicos from "../../functions/Array";
import { useState, useEffect } from "react";
import { servData } from "../../data/Servicos";
import styles from "../styles/Home.module.css";
import ServicoModel from "../../models/ServicoModel";

export default function Home(props) {
  const [servicos, setServicos] = useState([]);
  const [imagem, setImagem] = useState("/logo-em-acrilico.jpg");
  useEffect(() => {
    setServicos(servData);
  }, []);

  function controleDeSecao(servicoNovo: ServicoModel) {
    setImagem(servicoNovo.imagem);
    console.log(servicoNovo.imagem);
    setServicos(ControleServicos(servicos, servicoNovo));
  }

  function renderizarServicos() {
    return servicos.map((serv) => {
      return (
        <Servico
          key={serv.id}
          value={serv}
          onChange={(servicoNovo) => {
            controleDeSecao(servicoNovo);
          }}
        ></Servico>
      );
    });
  }

  return (
    <>
      <Imagens src={imagem}></Imagens>
      <div className={styles.servicos}>{renderizarServicos()}</div>
    </>
  );
}
