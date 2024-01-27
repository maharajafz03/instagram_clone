import React from 'react'
import './sidenav.css'
import instalogo from '../assets/instalogo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';

const Sidenav = () => {
  return (
    <div className='sidenav'>
        <img
        className='sidenav__logo'
        src={instalogo}
         />
         <div className='sidenav__buttons'>

        <button className='side__button'>
            <HomeIcon />
            <span>Home</span>
        </button>

        <button className='side__button'>
            <SearchIcon />
            <span>Search</span>
        </button>

        <button className='side__button'>
            <ExploreIcon/>
            <span>Explore</span>
        </button>
      <button className='side__button'>
            <SlideshowIcon />
            <span>Slideshow</span>
        </button>

        <button className='side__button'>
            <ChatIcon />
            <span>Message</span>
        </button>

        <button className='side__button'>
            <FavoriteIcon />
            <span>Notification</span>
        </button>

        <button className='side__button'>
            <AddCircleIcon />
            <span>Create</span>
        </button>

         </div>
         <div className='sidenav__more'>
            <button className='side__button'>
            <MenuIcon />
            <span>More</span>
            </button>
         </div>
    </div>
  )
}

export default Sidenav