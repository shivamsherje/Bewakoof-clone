import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "../homepage/Footer";
import Navbar from "../homepage/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
  const [goToHome, SetGotoHome] = React.useState(false);

  if (goToHome) {
    alert("login successfull");
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h1 style={{ marginLeft: "9rem" }}>
            Welcome to the world of Bewakoof!
          </h1>
          <img
            style={{ width: "55rem" }}
            src="https://images.bewakoof.com/web/group-19-1617704502.png"
          />
        </div>

        <div className="form">
          <h1>Login</h1>
          <div className="fb">
            <img src="https://i.stack.imgur.com/b6jfF.png" />
          </div>

          <form>
            <h4 style={{ marginLeft: "-17rem" }}>EMAIL</h4>
            <input style={{ width: "310px", height: "30px" }} type="email" />
            <h4 style={{ marginLeft: "-15rem" }}>PASSWORD</h4>
            <input style={{ width: "310px", height: "30px" }} type="password" />
            <br />
            <br />
            <button
              className="loginbutton"
              style={{
                width: "320px",
                height: "40px",
                color: "white",
                backgroundColor: "teal",
                border: "none",
                fontFamily: "sans-serif",
                fontSize: "20px",
              }}
              onClick={() => {
                SetGotoHome(true);
              }}
            >
              LOGIN
            </button>
          </form>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "13px",
              color: "#696966",
            }}
          >
            By creating an account or logging in, you agree with Bewakoof's
            Terms <br /> and Conditions and Privacy Policy.
          </p>

          <Link to={"signin"} style={{ textDecoration: "none" }}>
            <h3>Don't have an account? Sign up here </h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
