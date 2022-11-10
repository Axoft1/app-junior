import styles from './Grid.module.scss'
import GridItem from "./GridItem.jsx";

const Grid = ({ links }) => {
  return (
    <div className={styles.grid}>
      {links.map(link => (
        <GridItem key={link._id} item={link} />
      ))}
    </div>
  );
};

export default Grid