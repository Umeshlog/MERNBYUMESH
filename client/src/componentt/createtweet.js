import React from "react";
import {
  FaCalendarCheck,
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
} from "react-icons/fa";
const CreateTweet = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/umeshl.jpg" alt="logo" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="what's Happning"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icon">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create_btn">
          <a href="">Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
