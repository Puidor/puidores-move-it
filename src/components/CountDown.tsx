import styles from "../styles/components/CountDown.module.css";

export function CountDown() {
  return (
    <div>
      {/* CONTADOR */}
      <div className={styles.countDownContainer}>
        {/* Div Minutos */}
        <div>
          <span>2</span>
          <span>5</span>
        </div>

        <span>:</span>

        {/* Div Segundos */}
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      {/* Button Contador */}
      <button type="button" className={styles.countdownButton}>
        Iniciar um Ciclo
      </button>
    </div>
  );
}
