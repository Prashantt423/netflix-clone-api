import './topbar.scss';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='dashBtopBar'>
      <div className='dashBtopBarWrapper'>
        <h3 className='dashBtopBarLogo'>pkAdmin</h3>
        <div className='dashBtopBarRight'>
          <div className='dashBtopBarRightIcons'>
            <NotificationsNoneIcon />
            <span className='dashBtopBarRightIconsBadge'>2</span>
          </div>
          <div className='dashBtopBarRightIcons'>
            <LanguageIcon />
            <span className='dashBtopBarRightIconsBadge'>2</span>
          </div>
          <SettingsIcon />

          <img
            className='dashBtopBarRightProfilePic'
            src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
