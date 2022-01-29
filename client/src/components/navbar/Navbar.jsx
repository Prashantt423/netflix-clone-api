import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamClicked, setIsHamClicked] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <div className={isHamClicked ? 'sm-slide-out' : 'sm-slide-in'}>
            <div>Homepage</div>
            <div>Series</div>
            <div>Movies</div>
            <div>New and Popular</div>
            <div>My list</div>
          </div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt='logo'
          />
          <MenuIcon
            className='hamIcon'
            onClick={() => {
              setIsHamClicked(!isHamClicked);
            }}
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className='right'>
          <SearchIcon className='hide-sm' />
          <span className='hide-sm'>kid</span>
          <NotificationsIcon className='hide-sm' />
          <img
            src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
          />
          <div className='profile'>
            <ArrowDropDownIcon />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
