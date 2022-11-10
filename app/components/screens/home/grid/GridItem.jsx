import styles from "./Grid.module.scss";
import parse from "html-react-parser";

const GridItem = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <a
          href={item.link}
          rel={"noreferrer"}
          target="_blank"
          className={styles.item}
        >
          <div
            className={styles.gradient}
            style={{
              backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.icon.path} alt="" />
          </div>
        </a>
      </div>
      <a
        href={item.link}
        rel={"noreferrer"}
        target="_blank"
        className={styles.back}
      >
        <div className={styles.content}>
          <h1>{item.title}</h1>
          <div className={styles.title}></div>
          <span>{parse(item.description)}</span>
        </div>
      </a>
    </div>
  );
};

export default GridItem;
