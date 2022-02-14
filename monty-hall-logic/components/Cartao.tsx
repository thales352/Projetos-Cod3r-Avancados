import { Children } from 'react';
import styles from '../src/styles/Cartao.module.css';
export default function Cartao({ children }) {
  return (
    <>
      <div className={styles.cartao}>{children}</div>
    </>
  );
}
