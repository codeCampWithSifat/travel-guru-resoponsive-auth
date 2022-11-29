import React from "react";
import googleplay from "../../../images/googleplay.png";

const Footer = () => {
  return (
    <div style={{backgroundColor:"#5A00DD"}}>
      <div className="container text-white" style={{ marginTop: "6rem" }}>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div>
            <h2>Travel Guru</h2>
            <p> Level-4, 34, Awal Centre, Banani, Dhaka</p>
            <p>Official : sayedhossainsifat100@gmail.com</p>
            <p>Help line : 01997741967</p>
            <p> (Avalibale : Sat-Thu 10.00 AM To 7.00 PM) </p>
            <img src={googleplay} className="w-50" alt="" />
          </div>
          <div>
            <h4>Blog</h4>
            <p>Success</p>
            <p>About Us</p>
            <p>Refund Policy</p>
            <p>Privacy And App Policy</p>
          </div>
          <div>
            <h4>Guides</h4>
            <p>Getting Started</p>
            <p>Starter Template</p>
            <p>Webpack</p>
            <p>Parcel </p>
            <p>Vite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
