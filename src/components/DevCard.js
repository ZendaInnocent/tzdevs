import styles from '../styles/Main.module.css';

export default function DevCard({ node }) {
  const dev = node.node;

  return (
    <div className={styles.card}>
      <img src={dev.avatarUrl} alt="" className={styles.avatar} />
      <div className={styles.cardBody}>
        <h3 className={styles.name}>{dev.name}</h3>
        <p className="">@{dev.login}</p>
        <p className={styles.title}>Full Stack Developer</p>
        <p className={styles.location}>{dev.location}</p>
      </div>
    </div>
  );
}
