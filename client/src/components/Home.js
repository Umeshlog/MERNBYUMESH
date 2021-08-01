import React, { useState, useEffect } from "react";


const Home = () => {
  const [userName, setUserName] = useState("");

  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="wel">
            <span className="we1">w</span>
            <span className="we2">e</span>
            <span className="we3">l</span>
            <span className="we4">c</span>
            <span>ome</span>
          </p>
          <h1 className="hname">{userName}</h1>
          <h2 className="wel2">
            {/* {show ? "Happy to see you back" : "we are the mern devloper"} */}
            {show ? "Happy to see you back" : "we are the mern devloper"}
          </h2>
        </div>
      </div>
    </>
  );
};







export default Home;
