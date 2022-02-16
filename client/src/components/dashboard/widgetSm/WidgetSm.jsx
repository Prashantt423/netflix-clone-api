import './widgetSm.scss';
import Visibility from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDNjNjU5MDY2YjU2NmIxMDUwMDQzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDc0MDQ2OCwiZXhwIjoxNjQ1MTcyNDY4fQ.m03FApkGlmpBIKVq4WHXppYYXUESRrG3xmTYjWWg0ps',
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
        {newUsers &&
          newUsers.map((user, i) => (
            <li key={i} className='dashBWidgetSmListItem'>
              <img
                src={
                  user.profilePic ||
                  'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
                }
                alt=''
                className='dashBWidgetSmListItemImg'
              />
              <div className='dashBWidgetSmListItemUser'>
                <span className='dashBWidgetSmListItemUsername'>
                  {user.username}
                </span>
              </div>
              <button className='dashBWidgetSmListItemButton'>
                <Visibility className='dashBWidgetSmListItemIcon' />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
