import styles from "../styles/Main.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <a href="/">
        <h1>TzDevs</h1>
      </a>
    </header>
  );
};

export default Header;
