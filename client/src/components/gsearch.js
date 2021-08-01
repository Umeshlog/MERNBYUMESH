import React, { useState } from "react";
import { key, cx } from "../componentg/api";
import axios from "axios";
import { FaMicrophone, FaSistrix } from "react-icons/fa";
// import Show from "./Show";
import Gshow from "./gshow";

function Gsearch(props) {
  const goback = () => {
    props.history.push("/Googles");
  };
  const [state, setState] = useState(
    props.location.state ? props.location.state : ""
  );
  const [result, setResult] = useState([""]);
  const [info, setInfo] = useState("");
  const searchgoogles = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (res) {
        //   console.log(res);
        console.log(res.data.items, res.data.searchInformation);
        // console.log(res.data.searchInformation);
       
        setResult(res.data.items);
        setInfo(res.data.searchInformation);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(result, info);
  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/smallgoogle.png" alt="logo" onClick={goback} />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchgoogles}>
            <input
              type="text"
              className="home__input"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />

            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <Gshow result={result} info={info} />
    </div>
  );
}

export default Gsearch;
