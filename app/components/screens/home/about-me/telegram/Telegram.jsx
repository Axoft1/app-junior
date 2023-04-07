import styles from './Telegram.module.scss'
import { APP_URL } from "../../../../../constants";

const Telegram = ({ iconTelegram }) => {
  return (
    <div className={styles.button1}>
      <a
        href="https://t.me/Axoft10"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        <span>
          <img src={iconTelegram} alt="" height={18} width={18} />
        </span>
        <span>Telegram</span>
      </a>
    </div>
  );
};

export default Telegram