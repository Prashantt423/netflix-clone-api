import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contextApi/authContext/AuthContext';
import './featured.scss';

export default function Featured(props) {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      const res = await axios.get('/movies/random', {
        headers: {
          token: 'Bearer ' + user?.accessToken,
        },
      });
      setFeaturedMovie(res.data);
    };
    fetchFeaturedMovie();
  }, [user?.accessToken]);
  const handleGenre = (e) => {
    props.setGenre(e.target.value);
  };
  return (
    <>
      {featuredMovie && (
        <div className='featured'>
          {props.type && (
            <div className='category'>
              <span>{props.type === 'movies' ? 'Movies' : 'Series'}</span>
              <select name='genre' id='genre' onChange={handleGenre}>
                <option>Genre</option>
                <option value='adventure'>Adventure</option>
                <option value='comedy'>Comedy</option>
                <option value='crime'>Crime</option>
                <option value='fantasy'>Fantasy</option>
                <option value='historical'>Historical</option>
                <option value='horror'>Horror</option>
                <option value='romance'>Romance</option>
                <option value='sci-fi'>Sci-fi</option>
                <option value='thriller'>Thriller</option>
                <option value='western'>Western</option>
                <option value='anime'>Animation</option>
                <option value='drama'>Drama</option>
                <option value='documentary'>Documentary</option>
              </select>
            </div>
          )}
          <img src={featuredMovie?.[0].img} alt='' />
          <div className='info'>
            <img src={featuredMovie?.[0].imgTitle} alt='' />
            <span className='desc'>{featuredMovie?.[0].desc}</span>
            <div className='buttons'>
              <NavLink
                className='link'
                to={{ pathname: '/watch', search: featuredMovie?.[0].video }}
              >
                <button className='play'>
                  <PlayArrowIcon />
                  <span>Play</span>
                </button>
              </NavLink>
              <button className='more'>
                <InfoOutlinedIcon />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
