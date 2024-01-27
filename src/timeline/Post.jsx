import React from 'react'
import './post.css'
import {Avatar} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import pic_3 from '../assets/pic_3.jpg'
import pic_4 from '../assets/pic_4.jpg'
import pic_5 from '../assets/pic_5.jpg'
import pic_6 from '../assets/pic_6.jpg'
import pic_7 from '../assets/pic_7.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import { post } from '../post.js'

const Post = () => {
  return (

    <div className='post'>
      <div className='post__header'>
      <div className='post__headerAuthor'>

      <Avatar>Maga</Avatar>
         nana_mg* <span>12hrs</span>

      </div>
        
      </div>
      <MoreHorizIcon/>
      <div className='post__image'>
        <img src={pic_3}/>
      </div>

      <div   className='post__footer'>
     <div className='post__footerIcons'>
      <div className='post__iconsMain'>
            <FavoriteBorderIcon className='posticon' /> 
            <TelegramIcon className='posticon' /> 
            <ChatBubbleOutlineRoundedIcon className='posticon' /> 
             
             
      </div>
      <div className='post__iconSave'>
      <BookmarkBorderIcon className='posticon' />
      </div>
     </div> 
     <p>Liked_by 82 peoples..</p>
      </div>

      <div className='post__header'>
      <div className='post__headerAuthor'>

      <Avatar>Maga</Avatar>
         nana_mg* <span>12hrs</span>

      </div>
        
      </div>
      <MoreHorizIcon/>
      <div className='post__image'>
        <img src={pic_4}/>
      </div>

      <div   className='post__footer'>
     <div className='post__footerIcons'>
      <div className='post__iconsMain'>
            <FavoriteBorderIcon className='posticon' /> 
            <TelegramIcon className='posticon' /> 
            <ChatBubbleOutlineRoundedIcon className='posticon' /> 
             
             
      </div>
      <div className='post__iconSave'>
      <BookmarkBorderIcon className='posticon' />
      </div>
     </div> 
     <p>Liked_by 82 peoples..</p>
      </div>

      <div className='post__header'>
      <div className='post__headerAuthor'>

      <Avatar>Maga</Avatar>
         nana_mg* <span>12hrs</span>

      </div>
        
      </div>
      <MoreHorizIcon/>
      <div className='post__image'>
        <img src={pic_5}/>
      </div>

      <div   className='post__footer'>
     <div className='post__footerIcons'>
      <div className='post__iconsMain'>
            <FavoriteBorderIcon className='posticon' /> 
            <TelegramIcon className='posticon' /> 
            <ChatBubbleOutlineRoundedIcon className='posticon' /> 
             
             
      </div>
      <div className='post__iconSave'>
      <BookmarkBorderIcon className='posticon' />
      </div>
     </div> 
     <p>Liked_by 82 peoples..</p>
      </div>

      <div className='post__header'>
      <div className='post__headerAuthor'>

      <Avatar>Maga</Avatar>
         nana_mg* <span>12hrs</span>

      </div>
        
      </div>
      <MoreHorizIcon/>
      <div className='post__image'>
        <img src={pic_6}/>
      </div>

      <div   className='post__footer'>
     <div className='post__footerIcons'>
      <div className='post__iconsMain'>
            <FavoriteBorderIcon className='posticon' /> 
            <TelegramIcon className='posticon' /> 
            <ChatBubbleOutlineRoundedIcon className='posticon' /> 
             
             
      </div>
      <div className='post__iconSave'>
      <BookmarkBorderIcon className='posticon' />
      </div>
     </div> 
     <p>Liked_by 82 peoples..</p>
      </div>

      <div className='post__header'>
      <div className='post__headerAuthor'>

      <Avatar>Maga</Avatar>
         nana_mg* <span>12hrs</span>

      </div>
      
        
      </div>
      <MoreHorizIcon/>
      <div className='post__image'>
        <img src={pic_7}/>
      </div>

      <div   className='post__footer'>
     <div className='post__footerIcons'>
      <div className='post__iconsMain'>
            <FavoriteBorderIcon className='posticon' /> 
            <TelegramIcon className='posticon' /> 
            <ChatBubbleOutlineRoundedIcon className='posticon' /> 
             
             
      </div>
      <div className='post__iconSave'>
      <BookmarkBorderIcon className='posticon' />
      </div>
     </div> 
     <p>Liked_by 82 peoples..</p>
      </div>
      </div>
       
  )
}

export default Post