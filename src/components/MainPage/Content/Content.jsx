import React from "react";
import "./Content.css";

function Content() {
  return (
    <div>
      <div className="contentWrapper">
        <div className="fieldtypeList">
          <div className="field field1">
            <p>Sân 5</p>
            <p>
              <strong>4/5</strong> sân đã thuê
            </p>
            <a href="/booking" className="orderBtn">
              Đặt sân
            </a>
          </div>
          <div className="field field2">
            <p>Sân 7</p>
            <p>
              <strong>2/2</strong> sân đã thuê
            </p>
            <a href="/booking" className="orderBtn">
              Đặt sân
            </a>
          </div>
          <div className="field field3">
            <p>Sân 11</p>
            <p>
              <strong>1/2</strong> sân đã thuê
            </p>
            <a href="/booking" className="orderBtn">
              Đặt sân
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
