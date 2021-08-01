import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    address:"",
    password: "",
    cpassword: "",
  });

  // let name, value;

  const handleInputs = (e) => {
    console.log();
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work,address, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // protocol: "http:",
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        address,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status===422 || !data) {
      window.alert("invailid registration");
      console.log("invailid regitration");
    } else {
      window.alert("successfull registration");
      console.log("successfull regitration");

      history.push("/Login");
    }
  };

  return (
    <>
      <section className="signUp">
        <div className="container mt-1">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">signUp</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="your phone no."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="your profesion"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="off"
                    value={user.address}
                    onChange={handleInputs}
                    placeholder="your address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="your password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="conform your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    className="btn btn-primary form-submit regis"
                    type="submit"
                    name="signup"
                    id="signup"
                    value="Register"
                    onClick={postData}
                  />

                  <NavLink to="/Login" className="loginbtn btn btn-danger">
                    Login
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
