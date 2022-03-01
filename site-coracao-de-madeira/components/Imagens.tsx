import Image from "next/image";
import styles from "../src/styles/Imagens.module.css";

export default function Imagens(props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.innerContainer}`}>
        <Image
          width={160}
          height={50}
          objectFit="cover"
          src={props.src}
          className={styles.imagem}
          layout="responsive"
        ></Image>
      </div>
    </div>
  );
}
