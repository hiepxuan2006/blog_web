import React from "react";
import "./Footer.scss";
function Footer(props) {
  return (
    <div className="footer">
      <div className="grid wide">
        <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="" className="footer__link">
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li className="footer__item">
              <a href="" className="footer__link">
                <i className="fa-brands fa-instagram"></i>
                <span>INSTAGRAM</span>
              </a>
            </li>
            <li className="footer__item">
              <a href="" className="footer__link">
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li className="footer__item">
              <a href="" className="footer__link">
                <i className="fa-brands fa-pinterest"></i>
                <span>Printerest</span>
              </a>
            </li>
          </ul>
          <div className="footer__license">
            <span>@ 2022 - &copy; hiepxuan2006 </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
