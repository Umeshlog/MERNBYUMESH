import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // protocol: "http:",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("invailid Credential");
      console.log("invailid Credential");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login in successfull");

      history.push("/");
    }
  };
  return (
    <>
      <section className="signUp">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signup-form">
              <h2 className="form-title">signUn</h2>
              <form method="POST" className="register-form" id="register-form">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    className="btn btn-primary form-submit regis"
                    type="submit"
                    name="signin"
                    id="signin"
                    value="Login"
                    onClick={loginUser}
                  />

                  <NavLink to="/Signup" className="loginbtn btn btn-danger">
                    Create Acount
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

export default Login;
