import React from "react";
import {
  FaComment,
  FaHeart,
  FaLeaf,
  FaRegChartBar,
  FaRegCheckCircle,
} from "react-icons/fa";

const Post = (props) => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="postss__first__img">
          <img src={props.logo} alt="profileimage" />
        </div>
        <div className="postss__first__name">
          <strong>{props.name}</strong>
          <FaRegCheckCircle className="verify" />
          <div className="postss__first__username">
            {props.username} <span>{props.minut}</span>
          </div>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          inventore doloribus illum doloremque, cupiditate cum modi nostrum ipsa
          quibusdam, sed pariatur excepturi. Excepturi tempora ducimus
          temporibus, reiciendis at obcaecati. Iure!
        </div>
        <div className="postss__details__img">
          <img src={props.img} alt="cricket" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" />
            45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" />
            345
          </span>
          <span>
            <FaLeaf className="re" />
            234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
