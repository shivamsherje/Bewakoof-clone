import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="totalnavbar">
      <div className="main1">
        <div className="uppernavbar">
          <div>Offer</div>
          <div>Fanbook</div>
          <div style={{ width: "80px" }}>Download App</div>
          <div style={{ width: "100px" }}>Tribe Membership</div>
          <div style={{ marginLeft: "44rem", width: "60px" }}>Contact us</div>
          <div>Track order</div>
        </div>
      </div>

      <div className="main2">
        <div className="lowernavbar">
          <div>
            <img
              className="logo1"
              src="https://cdn.shopify.com/s/files/1/0637/0705/4316/collections/bewakoof-online-shopping.jpg?v=1659015382"
              alt="bewakoof logo"
            />
          </div>

          <div style={{ marginLeft: "30px" }} className="men">
            MEN
          </div>
          <div className="men">WOMEN</div>
          <div className="men" style={{ width: "140px" }}>
            MOBILE COVER
          </div>

          <div>
            <input
              style={{
                width: "260px",
                padding: "10px",
                marginTop: "3px",
                backgroundColor: "#eee",
                border: "1px solid #cccc",
                marginLeft: "20rem",
              }}
              placeholder="Search by product,category or collection"
            />
          </div>

          <Link to={"signin"}  style={{textDecoration:"none"}}>
            <div  style={{ fontSize: "15px", marginTop: "10px", width: "50px" , textDecoration:"none"}}>
              | Login
            </div>
          </Link>

          <div>
            <img
              style={{ width: "20px", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            />
          </div>

          <div>
            <img
              style={{ width: "20px", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/512/2832/2832499.png"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
