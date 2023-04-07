import { APP_URL } from "../../../../../constants";
import styles from "./EmailButton.module.scss";

const EmailButton = ({ iconEmail }) => {
  return (
    <div className={styles.button}>
      <a
        href="mailto:info@htmllessons.ru"
        target="_blank"
        rel="noreferrer"
        title="info@htmllessons.ru"
      >
        <span>
          <img src={iconEmail} alt="" height={18} width={18} />
        </span>
        <span>Email</span>
      </a>
    </div>
  );
};

export default EmailButton;
