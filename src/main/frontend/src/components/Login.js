import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

import "./login.css";

function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        if (res) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        if (res) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/" className="login__logoLink">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => {
              setform((previousData) => {
                return {
                  ...previousData,
                  [e.target.name]: e.target.value,
                };
              });
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => {
              setform((previousData) => {
                return {
                  ...previousData,
                  [e.target.name]: e.target.value,
                };
              });
            }}
          />
          <button className="login__signInButton" onClick={signIn}>
            Sign in
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <button
          type="submit"
          className="login__registerButton"
          onClick={register}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
