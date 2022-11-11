import Home from '../app/components/screens/home/Home'
import axios from 'axios';
import { API_URL } from '../app/constants';

export default function HomePage(props) {
  return <Home {...props}/>
}

export const getStaticProps = async () => {
  try{

    const me = await axios.get(`${API_URL}/me`).then(({data}) => data)
    const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
    return {
      props: {
        me,
        links,
      },
      revalidate: 60,
    };
  }catch (error) {
    console.error(error);
    // return { notFound: true };
  }
};