import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logos from "../images/logo.png";
import { useHistory, Link } from "react-router-dom";
import Crud from "./Crud";
import Todaysp from "./Todaysp";


import umesh from "../images/umesh.png";

const About = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.eroor);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/Login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  function handleClick() {
    <Crud />;
  }

  return (
    <>
      <div className="container emp-profile mt-5">
        <form method="GET" className="aboutform">
          <div className="row">
            <div className="col-md-4">
              <img
                src={userData.name === "umesh patel" ? logos : umesh}
                alt="umeshpatel"
                className="logos"
              />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>npx create-react-app googleclone
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING: <span>1/10</span>{" "}
                </p>
                <nav className="nav nav-pills" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="hometab"
                    aria-selected="true"
                  >
                    Home
                  </a>
                  <a
                    className="nav-item nav-link "
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profiletab"
                    aria-selected="true"
                  >
                    Timeline
                  </a>
                </nav>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit btn"
                value="edit profile"
                name="btnAddMore"
              />
            </div>
          </div>

          <div className="row">
            {/* right url */}

            <div className="col-md-4">
              <div className="profile-work">
                <p>work link</p>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  you tube
                </a>
                <br />

                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  thapa technical
                </a>
                <br />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  umesh patel
                </a>
                <br />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  mern you tube
                </a>
                <br />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  instagram
                </a>
                <br />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  figma
                </a>
                <br />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_umesh"
                  className="link"
                >
                  selfware engeneer
                </a>
                <br />
              </div>
            </div>

            {/* right side data toggle */}

            <div className="col-md-8 pl-5 abour-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="hometab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>ryihfhshrg4567nfhvjbrgsbdk</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>NAME</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Work</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Address</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.address}</p>
                    </div>
                  </div>
                  <h5>
                    Do You Want To <mark className="mark">"ADD"</mark> Name In
                    List ,If You Yes ,Please Scroll Down
                  </h5>
                  <div
                    className="tab-pane fade "
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profiletab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>experience</label>
                      </div>
                      <div className="col-md-6">
                        <label>Expert</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <label>10$ /hr</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Work</label>
                      </div>
                      <div className="col-md-6">
                        <label>Free Lancing</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Work</label>
                      </div>
                      <div className="col-md-6">
                        <label>Web Developer</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Projects</label>
                      </div>
                      <div className="col-md-6">
                        <label>300</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* CRUD OPARTION */}
      <div className="container  text-center">
        <div className="row">
          <div className="divcrud col-md-12 col-sm-12">
            <h3>
              Do You Want To <mark className="mark">"ADD"</mark> Name In List
              ,If You Yes ,Please Scroll Down
            </h3>
            <Crud />
          </div>
        </div>
      </div>

      {/* todays paln */}

      <div className="container  text-center">
        <div className="row">
          <div className="divcrud col-md-12 col-sm-12">
            <h3 className="today">
              Do You Want To <mark className="mark">"ADD"</mark> Todays Plan In
              List ,If You Yes ,Please Scroll Down
            </h3>
            <Todaysp />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
