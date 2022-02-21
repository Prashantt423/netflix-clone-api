import { Link, useParams } from 'react-router-dom';
import './product.scss';
import Publish from '@mui/icons-material/Publish';
import { useEffect } from 'react';
import { getOneMovie } from '../../../contextApi/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from '../../../contextApi/movieContext/MovieContext';

export default function Product(props) {
  const { movie, dispatch } = useContext(MovieContext);
  const parms = useParams();

  useEffect(() => {
    getOneMovie(parms.productId, dispatch);
  }, [dispatch, parms.productId]);

  return (
    <>
      {movie && (
        <div className='product'>
          <div className='productTitleContainer'>
            <h1 className='productTitle'>Movie</h1>
            <Link to='/dashboard/movie/newmovie'>
              <button className='productAddButton'>Create</button>
            </Link>
          </div>
          <div className='productTop'>
            <div className='productTopRight'>
              <div className='productInfoTop'>
                <img src={movie.img} alt='' className='productInfoImg' />
                <span className='productName'>{movie.title}</span>
              </div>
              <div className='productInfoBottom'>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>id:</span>
                  <span className='productInfoValue'>{movie._id}</span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>duration</span>
                  <span className='productInfoValue'>{movie.limit}</span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>desc:</span>
                  <span className='productInfoValue'>{movie.desc}</span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>year:</span>
                  <span className='productInfoValue'>{movie.year}</span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>type:</span>
                  <span className='productInfoValue'>
                    {movie.isSeries ? 'series' : 'movie'}
                  </span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>genre:</span>
                  <span className='productInfoValue'>{movie.genre}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='productBottom'>
            <form className='productForm'>
              <div className='productFormLeft'>
                <label>Movie Title</label>
                <input type='text' placeholder={movie.title} />
                <label>Year</label>
                <input type='text' placeholder={movie.year} />
                <label>Genre</label>
                <input type='text' placeholder={movie.genre} />
                <label>Limit</label>
                <input type='text' placeholder={movie.limit} />
                <label>Trailer</label>
                <input type='file' placeholder={movie.trailer} />
                <label>Video</label>
                <input type='file' placeholder={movie.video} />
              </div>
              <div className='productFormRight'>
                <div className='productUpload'>
                  <img src={movie.img} alt='' className='productUploadImg' />
                  <label for='file'>
                    <Publish />
                  </label>
                  <input type='file' id='file' style={{ display: 'none' }} />
                </div>
                <button className='productButton'>Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
