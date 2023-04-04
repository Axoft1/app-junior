import Home from "../app/components/screens/home/Home";
import fsPromises from "fs/promises";
import path from "path";

export default function HomePage(props) {
  return <Home {...props} />;
}

export const getStaticProps = async () => {
  try {
    const filePath = path.join(process.cwd(), "m.json");
    const jsonData = await fsPromises.readFile(filePath);
    const me = JSON.parse(jsonData);
    const filePath2 = path.join(process.cwd(), "l.json");
    const jsonData2 = await fsPromises.readFile(filePath2);
    const links = JSON.parse(jsonData2);

    return {
      props: {
        me,
        links,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
  }
};
