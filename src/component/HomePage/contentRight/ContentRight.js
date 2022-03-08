import React from "react";
import './ContentRight.scss'

function ContentRight(props) {
  return (
    <div className="row no-gutters">
      <div className="content__right">
        <div className="content__info">
          <h3>
            <span className="title">Keep in touch</span>
          </h3>
          <div className="content__social">
            <a href="" className="content__social-link">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" className="content__social-link">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="" className="content__social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="" className="content__social-link">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="" className="content__social-link">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        <div className="content__last-new">
          <h3 className="last-new__title">Recent Post</h3>
          <div className="last-new__post ">
            <img
              src="https://media.songdep.com.vn/files/thunga/2021/06/23/ha-noi-dung-thu-may-o-danh-sach-nhung-thanh-pho-ap-luc-nhat-toan-cau-0-163656.jpg"
              alt=""
            />
            <div className="last-new__desc">
              <span className="last-new__heading">
                How To Plan An Adventure To The West
              </span>
              <span className="last-new__time">September 10, 2018</span>
            </div>
          </div>
          <div className="last-new__post isgreat">
            <img
              src="https://media.songdep.com.vn/files/thunga/2021/06/23/ha-noi-dung-thu-may-o-danh-sach-nhung-thanh-pho-ap-luc-nhat-toan-cau-0-163656.jpg"
              alt=""
            />
            <div className="last-new__desc">
              <span className="last-new__heading">
                How To Plan An Adventure To The West
              </span>
              <span className="last-new__time">September 10, 2018</span>
            </div>
          </div>
          <div className="last-new__post isgreat">
            <img
              src="https://media.songdep.com.vn/files/thunga/2021/06/23/ha-noi-dung-thu-may-o-danh-sach-nhung-thanh-pho-ap-luc-nhat-toan-cau-0-163656.jpg"
              alt=""
            />
            <div className="last-new__desc">
              <span className="last-new__heading">
                How To Plan An Adventure To The West
              </span>
              <span className="last-new__time">September 10, 2018</span>
            </div>
          </div>
        </div>
        <div className="content__category">
          <h3>
            <span className="title">Categories</span>
          </h3>
          <ul className="category-list">
            <li className="category-item">
              <a href="" className="category-link">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                  Adventures
                </span>
                <span>(6)</span>
              </a>
            </li>
            <li className="category-item">
              <a href="" className="category-link">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                  Featuresd
                </span>
                <span>(6)</span>
              </a>
            </li>
            <li className="category-item">
              <a href="" className="category-link">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                  Photograpphy
                </span>
                <span>(6)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentRight;
