import { Botao, Entrada, Porta } from '../../components/All';
import { useEffect, useState } from 'react';
import styles from '../styles/Inicio.module.css';
import Cartao from '../../components/Cartao';

export default function Index() {
  const [num, setnum] = useState(3);
  const [aleatorio, setale] = useState(Math.floor(Math.random() * num + 1));
  function verificarNumero(numero: number) {
    if (numero < 3 || numero > 100) {
      return;
    }
    setale(Math.floor(Math.random() * numero + 1));
    setnum(numero);
  }

  return (
    <>
      <header className={styles.cabecalho}>
        <h1 className={styles.titulo}>MontyHall - O Jogo</h1>
        <h4 className={styles.subtitulo}>O problema matemático simplificado</h4>
      </header>
      <main className={styles.main}>
        <section className={styles.regras}>
          <Cartao>
            <h3 className={styles.subtitulo}>1. Como Funciona ?</h3>
            <p>
              Você deve escolher um número de portas a ser gerado de 3 a 100.
            </p>
          </Cartao>
          <Cartao>
            <h3 className={styles.subtitulo}>2. O Jogo</h3>
            <p>
              Um presente será colocado atrás de uma delas. Você então deve
              encontrar onde ele está.
            </p>
          </Cartao>
          <Cartao>
            <h3 className={styles.subtitulo}>3. Regras</h3>
            <p>
              Ao selecionar uma porta, uma outra porta que não tem o presente
              será aberta e você terá a oportunidade de mudar de porta.
            </p>
          </Cartao>
          <Cartao>
            <h3 className={styles.subtitulo}>3. Portas</h3>
            <p>--Para selecionar uma porta basta clicar nela.</p>{' '}
            <p>--Para abri-la clique na maçaneta.</p>
          </Cartao>
        </section>

        <Entrada
          value={num}
          onChange={(numero) => {
            verificarNumero(numero);
          }}
        ></Entrada>
        <Botao href={`/jogo/${num}/${aleatorio}`}>INICIAR</Botao>
      </main>
    </>
  );
}
