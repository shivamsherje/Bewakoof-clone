import React from "react";

const Navbar = () => {
  return (
    <div className="totalnavbar">
      <div className="main1">
        <div className="uppernavbar">
          <div>Offer</div>
          <div>Fanbook</div>
          <div>Download App</div>
          <div>Tribe Membership</div>
          <div style={{ marginLeft: "47rem" }}>Contact us</div>
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
          <div className="men">MOBILE COVER</div>

          <div>
            <input
              style={{
                width: "260px",
                padding: "10px",
                marginTop: "3px",
                backgroundColor: "#eee",
                border: "1px solid #cccc",
                marginLeft: "22rem",
              }}
              placeholder="Search by product,category or collection"
            />
          </div>

          <div style={{ fontSize: "15px", marginTop: "10px" }}>| Login</div>
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
