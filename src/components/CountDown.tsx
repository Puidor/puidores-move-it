import { useState, useEffect } from "react";
import styles from "../styles/components/CountDown.module.css";

export function CountDown() {
  const [time, setTime] = useState(25 * 60); // UseState do Contador para 25 minutos
  const [active, setActive] = useState(false); // Verifica se o contador está ativo

  const minutes = Math.floor(time / 60); // Contador dos minutos arrendondados
  const seconds = time % 60; //Contados dos segundos / Resto da divisão

  // => Separa Minutes/Seconds
  // padStart -> Verifica se a string possui 2 valores
  // Se não possui, acrescenta um 0 na frente.
  //Ex: minutes = 32 -> Possui 2 valores -> "3" e "2"
  //Ex: minutes = 2 -> Não possui 2 valores -> Então fica -> "0" e "2"
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  //Função para startar o Contador
  function startCountdown() {
    setActive(true);
  }

  //=> useEffect -> contagem regressiva
  // Enquanto active = true e time for > 0
  // setTimeout irá rodar a cada 1s (1000)
  // A cada 1s a variável time irá reduzir em 1
  // useEffect irá ativar => active e time mudar
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      {/* CONTADOR */}
      <div className={styles.countDownContainer}>
        {/* Div Minutos */}
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        {/* Div Segundos */}
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {/* Button Contador */}
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um Ciclo
      </button>
    </div>
  );
}
