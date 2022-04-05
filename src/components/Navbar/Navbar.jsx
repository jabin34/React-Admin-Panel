import React from 'react';
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar = () => {
    return (
        <div className='navbar'>
           <div className="wrapper">
               <div className="search">
                   <input type="text" placeholder='Search...' />
                   <SearchIcon />
               </div>
               <div className="items">
                   <div className="item">
                   <LanguageIcon className="icon"/>
                   English
                   </div>
                   <div className="item">
                   <DarkModeOutlinedIcon className="icon"/>
                   </div>
                   <div className="item">
                   <FullscreenIcon className="icon"/>
                   </div>
                   <div className="item">
                   <NotificationImportantIcon className="icon"/>
                   <div className='counter'>1</div>
                   </div>
                   <div className="item">
                   <ChatBubbleOutlineIcon className="icon"/>
                   <div className='counter'>2</div>
                   </div>
                   <div className="item">
                   <ListOutlinedIcon className="icon"/>
                   </div>
                   <div className="item">
                   <img src='https://media.istockphoto.com/photos/illustration-of-smiling-african-american-woman-with-laptop-sitting-in-picture-id1298353964?s=612x612' alt="profile" className='avatar'/>
                   </div>
               </div>
          </div> 
        </div>
    );
};

export default Navbar;