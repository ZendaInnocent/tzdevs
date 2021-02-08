import styles from "../styles/Main.module.css";

export default function DevCard({ dev }) {
  const devData = dev.node;
  return (
    <div className={styles.card}>
      <img src={devData.avatarUrl} alt="" className={styles.avatar} />
      <div className={styles.cardBody}>
        <h3 className={styles.name}>@{devData.login}</h3>
        <p className={styles.title}>{devData.company}</p>
        <p className={styles.location}>{devData.location}</p>
      </div>
    </div>
  );
}
