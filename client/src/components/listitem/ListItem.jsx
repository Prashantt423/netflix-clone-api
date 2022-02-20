import './listitem.scss';

import PlayArrow from '@mui/icons-material/PlayArrow';
import Add from '@mui/icons-material/Add';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contextApi/authContext/AuthContext';

export default function ListItem({ item }) {
  const [movie, setMovie] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token: 'Token ' + user?.accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item, user?.accessToken]);

  const [isHovered, setIsHovered] = useState(false);
  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );
  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <>
      {movie && (
        <NavLink
          to={{ pathname: '/watch', search: movie.video }}
          className='listItem'
          // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={movie?.img} alt='' />
          {isHovered && (
            <>
              <video src={movie?.trailer} autoPlay={true} loop />
              <div className='itemInfo'>
                <div className='icons'>
                  <PlayArrow className='icon' />
                  <Add className='icon' />
                  <ThumbUpAltOutlined className='icon' />
                  <ThumbDownOutlined className='icon' />
                  <span className='title'>{movie?.title}</span>
                </div>
                <div className='itemInfoTop'>
                  <span>
                    {movie.isSeries
                      ? movie?.limit + ' seasons'
                      : parseInt(movie?.limit / 60) +
                        ' hours' +
                        ' ' +
                        (movie?.limit % 60) +
                        ' minutes'}
                  </span>

                  <span className='limit'>+16</span>
                  <span>{movie?.year}</span>
                </div>
                <div className='desc'>
                  {movie?.desc?.substring(0, 50) + '...'}
                </div>
                <div className='genre'>
                  {movie?.genre?.substring(0, 30) + '...'}
                </div>
              </div>
            </>
          )}
        </NavLink>
      )}
    </>
  );
}
