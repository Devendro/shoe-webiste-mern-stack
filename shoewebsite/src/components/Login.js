import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, login, register } from "../actions/userAction";
import { useLocation } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useNavigate();
  const location = useLocation();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const redirect = location.search ? location.search.split('=')[1] : '/userProfile'

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  return (
    <>
      <form
        className="container col-md-6 col-md-offset-6 d-flex flex-column"
        style={{ padding: "70px 15px 70px 15px" }}
        onSubmit={submitHandler}
      >
        <h3 className="text-center" style={{ marginBottom: "40px" }}>
          Welcome to{" "}
          <span className="text-success">
            <>SHOENIVERSE</>
          </span>
        </h3>
        <div className="mb-3 my-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setLoginEmail(e.target.value)}
            name="email"
            type="email"
            className="form-control"
            id="email"
            value={loginEmail}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setLoginPassword(e.target.value)}
            name="password"
            type="password"
            className="form-control"
            id="password"
            value={loginPassword}
            required
          />
        </div>
        <div className="form-text">
          Don't have an Account ?{" "}
          <Link to="/register" className="text-decoration-none">
            Sign Up
          </Link>
        </div>
        <button type="submit" className="btn btn-dark my-2">
          Submit
        </button>
      </form>
    </>
  );
}
