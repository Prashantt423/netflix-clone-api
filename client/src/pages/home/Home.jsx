import './home.scss';
import { Navbar } from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import Featured from '../../components/featured/Featured';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
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
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDNjNjU5MDY2YjU2NmIxMDUwMDQzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDc0MDQ2OCwiZXhwIjoxNjQ1MTcyNDY4fQ.m03FApkGlmpBIKVq4WHXppYYXUESRrG3xmTYjWWg0ps',
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

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists?.map((list, i) => (
        <List lists={list} key={i} />
      ))}
    </div>
  );
};
