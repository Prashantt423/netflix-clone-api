import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { NavLink, useLocation } from 'react-router-dom';
import './watch.scss';

export default function Watch() {
  const location = useLocation();
  const source = location.search.substring(1);
  return (
    <div className='watch'>
      <NavLink to='/'>
        <div className='back'>
          <ArrowBackOutlined />
          Home
        </div>
      </NavLink>
      <video className='video' autoPlay progress='true' controls src={source} />
    </div>
  );
}
