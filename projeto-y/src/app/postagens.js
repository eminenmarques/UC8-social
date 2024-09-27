import Image from "next/image";
import styles from "./postagens.module.css";

export default function Home() {
  return (
    <div className={styles.css}>
      <div className={styles.perfil}></div>
      <div className={styles.Mensagem}></div>
      <div className={styles.intaracao}></div>
    </div>
  );
}
