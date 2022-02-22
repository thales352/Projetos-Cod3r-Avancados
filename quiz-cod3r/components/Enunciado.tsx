import styles from '../src/styles/Enunciado.module.css';
interface EnunciadoProps {
  value: string;
}

export default function Enunciado(props: EnunciadoProps) {
  return (
    <>
      <p className={styles.enunciado}>{props.value}</p>
    </>
  );
}
