import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contextApi/authContext/AuthContext';
import './Movielist.scss';
// import { Publish } from "@material-ui/icons";

export default function List() {
  const id = useParams().id;
  const [list, setList] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await axios.get('/lists/' + id, {
          headers: {
            token:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });
        setList(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchList();
  }, [id, user]);
  return (
    <>
      {list && (
        <div className='product'>
          <div className='productTitleContainer'>
            <h1 className='productTitle'>List</h1>
            <Link to='/dashboard/movies/list/newlist'>
              <button className='productAddButton'>Create</button>
            </Link>
          </div>
          <div className='productTop'>
            <div className='productTopRight'>
              <div className='productInfoTop'>
                <span className='productName'>{list.title}</span>
              </div>
              <div className='productInfoBottom'>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>id:</span>
                  <span className='productInfoValue'>{list._id}</span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>genre:</span>
                  <span className='productInfoValue'>{list.genre}</span>
                </div>
                <div className='productInfoItem'>
                  <span className='productInfoKey'>type:</span>
                  <span className='productInfoValue'>{list.type}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='productBottom'>
            <form className='productForm'>
              <div className='productFormLeft'>
                <label>List Title</label>
                <input type='text' placeholder={list.title} />
                <label>Type</label>
                <input type='text' placeholder={list.type} />
                <label>Genre</label>
                <input type='text' placeholder={list.genre} />
              </div>
              <div className='productFormRight'>
                <button className='productButton'>Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
