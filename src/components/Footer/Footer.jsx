import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h4>Về chúng tôi</h4>
          <p>
            Với những sân bóng chất lượng cao và dịch vụ tốt, Saigon FutField là
            nơi lý tưởng để các bạn giao lưu, chia sẻ đam mê trái bóng tròn.
            Nghĩa vụ của chúng tôi là giúp các bạn có thể thỏa niềm đam mê của
            mình.
          </p>
        </div>
        <div className="footerSection">
          <h4>Liên hệ chúng tôi</h4>
          <p>Email: saigonfutfield@gmail.com</p>
          <p>Điện thoại: (123) 456-7890</p>
          <p>Địa chỉ: 1202 Huỳnh Tấn Phát, Quận 7, Thành phố Hồ Chí Minh</p>
        </div>
        <div className="footerSection">
          <h4>Follow Us</h4>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
            <a href="#">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2024 Saigon Futfield. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
