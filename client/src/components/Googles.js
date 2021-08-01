import React, { useState } from "react";
import "../componentg/Google.css";
import { FaMicrophone, FaSistrix } from "react-icons/fa";
import Gsearch from "./gsearch";
// import { useHistory } from "react";
import {useHistory} from "react-router-dom"

const Ghome = (props) => {
  const history = useHistory();
  const [state, setIstate] = useState("");
  const searchGoogle = (e) => {
    // props.history.push({ pathname: "/gsearch", state: istate });
    // <Gsearch istate={istate} />;
    // props.history.push("/gsearch",istate);
    // props.history.push({ pathname: "/gsearch", istate });
    // <Gsearch istate={istate}/>
   props.history.push({
      pathname:"/gsearch",
      state:state
    });
    // <Gsearches istate={istate} />;
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/images/google.png" alt="logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setIstate(e.target.value)}
            value={state}
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Google Search" />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Ghome;
