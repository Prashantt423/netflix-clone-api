import './widgetSm.scss';
import Visibility from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTZmYzQ2NDk0Mjc3MTYwNDg4MmMxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNTgzMjMxMSwiZXhwIjoxNjI2MjY0MzExfQ.ATXV-1TTWIGyVBttTQSf0erRWjsgZ8jHQv1ZsUixbng',
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className='dashBWidgetSm'>
      <span className='dashBWidgetSmTitle'>New Join Members</span>
      <ul className='dashBWidgetSmList'>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
        <li className='dashBWidgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='dashBWidgetSmListItemImg'
          />
          <div className='dashBWidgetSmListItemUser'>
            <span className='dashBWidgetSmListItemUsername'>Anna Keller</span>
            <span className='dashBWidgetSmListItemUserTitle'>
              Software Engineer
            </span>
          </div>
          <button className='dashBWidgetSmListItemButton'>
            <Visibility className='dashBWidgetSmListItemIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
