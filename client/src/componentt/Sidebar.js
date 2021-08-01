import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboard,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo"  />
          </a>
        </li>
        <li>
          <a href="">
            <FaHome className="icons logo" />
            Home
          </a>
        </li>
        <li>
          <a href="">
            <FaHashtag className="icons" />
            Explore
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBell  className='icons'/>
           Notification
          </a>
        </li>
        <li>
          <a href="">
            <FaRegEnvelope  className='icons'/>
            Masseges
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark  className='icons'/>
            BookMarks
          </a>
        </li>
        <li>
          <a href="">
            <FaClipboard  className='icons'/>
            Lists
          </a>
        </li>
        <li>
          <a href="">
            <FaUserAlt  className='icons'/>
            Profile
          </a>
        </li>
        <li>
          <a href="">
            <FaMehBlank  className='icons'/>
            More
          </a>
        </li>
        <div className="sidebar-btn">
            <a href="">Profile</a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
