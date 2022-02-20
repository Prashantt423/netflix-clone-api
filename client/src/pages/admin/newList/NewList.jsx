import { useContext, useEffect, useState } from 'react';
import './newList.scss';

import { getMovies } from '../../../contextApi/movieContext/apiCalls';
import { MovieContext } from '../../../contextApi/movieContext/MovieContext';
import { ListContext } from '../../../contextApi/listContext/ListContext';
import { createList } from '../../../contextApi/listContext/apiCalls';
import { useNavigate } from 'react-router-dom';

export default function NewList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate('/dashboard/movies/lists');
  };
  console.log(list);

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New List</h1>
      <form className='addProductForm'>
        <div className='formLeft'>
          <div className='addProductItem'>
            <label>Title</label>
            <input
              type='text'
              placeholder='Popular Movies'
              name='title'
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className='addProductItem'>
            <label>Genre</label>
            <input
              type='text'
              placeholder='action'
              name='genre'
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className='addProductItem'>
            <label>Type</label>
            <select
              name='type'
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>
        <div className='formRight'>
          <div className='addProductItem'>
            <label>Content</label>
            <select
              multiple={true}
              name='content'
              onChange={(e) => {
                handleSelect(e);
              }}
              style={{ height: '280px' }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className='addProductButton'
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
