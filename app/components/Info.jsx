import React from "react";
import "./Components.css";
const Info = () => {
  return (
    <div className="Home">
      <div className="hRight">
        <img src="/جديد الهيثم1.svg" alt="" />
        <img src="/جديد الهيثم2.svg" alt="" />
      </div>
      <div className="hLeft">
        <h1>محل 3 سنتر الخمسميات - كمبوند الجيش</h1>
        <h1>الفردوس - 6 اكتوبر</h1>
        <a className="number" href="tel:6031112298">
          <h2>01125993593</h2>
        </a>
        <a className="number" href="tel:01093713940">
          <h2>01093713940</h2>
        </a>

        <div className="icon">
          <a href="https://www.facebook.com/alhaitham.snack.2020">
            <img src="/facebook-color-svgrepo-com.svg" alt="Facebook logo" />
          </a>
          <a href="https://maps.app.goo.gl/enQmcJ1s4GuLTfHj7">
            <img src="./location-pin-svgrepo-com.svg" alt="Location logo" />
          </a>
        </div>
        <a className="btn" href="/Minue">
          <button>Minue</button>
        </a>
      </div>
    </div>
  );
};

export default Info;
