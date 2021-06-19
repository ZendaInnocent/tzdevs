import styles from '../styles/Main.module.css';
import DevCard from './DevCard';

const DevCards = ({ currentDevs }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {currentDevs.map((node, index) => (
          <a href="" key={index} title="View in GitHub" target="_new">
            <DevCard node={node} />
          </a>
        ))}
      </div>
      {/* <ul className={styles.pagination}>
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
      </ul> */}
    </div>
  );
};

export default DevCards;
