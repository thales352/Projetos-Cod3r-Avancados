import Link from 'next/link';
import styles from '../src/styles/Botao.module.css';

export default function Button({ children, href }) {
  return (
    <Link href={href} passHref>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}
