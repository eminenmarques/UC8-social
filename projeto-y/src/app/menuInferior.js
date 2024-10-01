import styles from "./menuInferior.module.css";

export default function MenuInferior() {
  return (
    <div className={styles.container}>
      <button className={styles.mais}>
        <img src="/burgermenu.svg"></img>
      </button>
      <button className={styles.trends}>
        <img src="/planet.svg"></img>
      </button>
      <button className={styles.digitar}>
        <img src="/notepaddark.svg"></img>
      </button>
      <button className={styles.batepapo}>
        <img src="/speechdark.svg"></img>
      </button>
      <button className={styles.conta}>
        <img src="/userdark.svg"></img>
      </button>
    </div>
  );
}
