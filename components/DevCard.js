import styles from "../styles/Main.module.css";

export default function DevCard({ dev }) {
  return (
    <div className={styles.card}>
      <img src="/images/avatar2.png" alt="" className={styles.avatar} />
      <div className={styles.cardBody}>
        <h3 className={styles.name}>@{dev.login}</h3>
        <p className={styles.title}>Full Stack Developer</p>
        <p className={styles.location}>Bay Area, San Francisco</p>
      </div>
    </div>
  );
}
