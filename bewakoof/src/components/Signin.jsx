import React from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [goToHome, SetGotoHome] = React.useState(false);

  if (goToHome) {
    alert("signin successfull");
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <br />
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

        <div className="form" style={{ height: "800px" }}>
          <h1>Create Account</h1>
          <div className="fb">
            <img src="https://i.stack.imgur.com/b6jfF.png" />
          </div>

          <form>
            <h4 style={{ marginLeft: "-14rem" }}>FIRST NAME</h4>
            <input style={{ width: "310px", height: "30px" }} type="text" />
            <h4 style={{ marginLeft: "-15rem" }}>LAST NAME</h4>
            <input style={{ width: "310px", height: "30px" }} type="text" />
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
              REGISTER
            </button>
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
            <a href="signin" style={{ textDecoration: "none" }}>
              <h3>Already have an account? login here </h3>
            </a>
          </form>
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
export default Signin;
