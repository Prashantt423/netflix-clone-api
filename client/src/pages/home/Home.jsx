import './home.scss';
import { Navbar } from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import Featured from '../../components/featured/Featured';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  if (type === 'movies') {
    type = 'movie';
  }

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer ' +
                JSON.parse(localStorage.getItem('user'))?.accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  genre && console.log(genre);
  lists && lists.reverse();

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists?.map((list) => (
        <List lists={list} key={list._id} />
      ))}
    </div>
  );
};
