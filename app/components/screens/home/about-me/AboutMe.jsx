import { APP_URL } from "../../../../constants";
import styles from "./AboutMe.module.scss";
import DescriptionButton from "./description-button/DescriptionButton.jsx";
import EmailButton from "./email-button/EmailButton.jsx";
import Telegram from "./telegram/Telegram";

const AboutMe = ({ me }) => {
  return (
    <div className={styles.me}>
      <div className={styles.image_wrapper}>
        <img
          src={me.avatar}
          width={190}
          height={190}
          className={styles.image}
          alt={me.siteName}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>Все проекты в одном месте</span>
      </div>
      <EmailButton />
      <Telegram />
      <DescriptionButton description={me.description} />
    </div>
  );
};

export default AboutMe;
