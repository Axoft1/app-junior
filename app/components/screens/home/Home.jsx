import Circles from "../../ui/cicrcles/Circles.jsx";
import MetaTitle from "../../ui/MetaTitle";
import AboutMe from "./about-me/AboutMe";
import Grid from "./grid/Grid.jsx";
import styles from "./Home.module.scss";

const Home = ({ links, me }) => {
  return (
    <section className={styles.section}>
      <MetaTitle title="Портфолио" />
      <div className={styles.container}>
        <AboutMe me={me} />
        <Grid links={links} />
      </div>
      <Circles />
   </section>
  );
};

export default Home;
