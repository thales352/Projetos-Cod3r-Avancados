import { renderToHTML } from "next/dist/server/render";
import ElementoTrilhaModel from "../models/ElementoTrilha";
import styles from "../src/styles/Trilha.module.css";

interface TrilhaProps {
  value: ElementoTrilhaModel[];
  onClick: () => void;
}

function renderizar(lista: ElementoTrilhaModel[]) {
  return lista.map((obj, i) => {
    return (
      <div key={i} className={styles.container}>
        <img src={obj.imagem}></img>
        <label>{obj.titulo}</label>
      </div>
    );
  });
}
export default function Trilha(props: TrilhaProps) {
  return (
    <div className={`${styles.trilha} ${styles.snapInline}`}>
      {renderizar(props.value)}
    </div>
  );
}
