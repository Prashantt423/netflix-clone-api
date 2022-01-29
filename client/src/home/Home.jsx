import './home.scss';
import { Navbar } from '../components/navbar/Navbar';
export const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img width='100%' src='https://picsum.photos/800/800' alt='' />
      <img width='100%' src='https://picsum.photos/800/800' alt='' />
      <img width='100%' src='https://picsum.photos/800/800' alt='' />
    </div>
  );
};
