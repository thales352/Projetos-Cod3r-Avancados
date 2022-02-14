import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Porta, Botao } from '../../../../components/All';
import CriarPortas, {
  atualizarPortas,
} from '../../../../functions/CriarPortas';
import styles from '../../../styles/Jogo.module.css';

export default function Index(second) {
  const [portaStates, setPorta] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const {
      query: { portas, tempresente },
    } = router;
    setPorta(CriarPortas(+portas, +tempresente));
  }, [router?.query]);

  function render() {
    return portaStates.map((porta, i) => {
      return (
        <Porta
          key={i}
          value={porta}
          onChange={(novaPorta) =>
            setPorta(atualizarPortas(portaStates, novaPorta))
          }
        ></Porta>
      );
    });
  }

  return (
    <div className={styles.Jogo}>
      <div className={styles.portas}>{render()}</div>
      <div className={styles.botoes}>
        <Botao href="/">Ínicio</Botao>
      </div>
    </div>
  );
}
