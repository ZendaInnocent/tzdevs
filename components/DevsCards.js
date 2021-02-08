import styles from "../styles/Main.module.css";
import DevCard from "./DevCard";

const DevCards = ({ currentDevs, pageNumbers, currentPage, handleClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {currentDevs.map((dev) => (
          <a href={dev.html_url} title="View in GitHub">
            <DevCard dev={dev} />
          </a>
        ))}
      </div>
      <ul className={styles.pagination}>
        {pageNumbers.map((pageNumber, index) => {
          return (
            <li

              key={index}
              onClick={handleClick}
              id={pageNumber}
              className={currentPage === pageNumber ? styles.currentPage : ''}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DevCards;
