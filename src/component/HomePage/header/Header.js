import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../api/store/actions/usersAction";
import setAuthToken from "../../../setAuthToken";
import { TOKEN_NAME } from "../../authContext/constant";
import "./Header.scss";

function Header(props) {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const isAuthentication = useSelector(
    (state) => state.userReducer.isAuthentication
  );
  const isAdmin = useSelector((state) => state.adminReducer.isAdminAuthentication)
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem(TOKEN_NAME);
    setAuthToken("");
    dispatch(logoutUser());
  };
  console.log(isAdmin);

  return (
    <div className="header">
      <div className="header__content">
        <ul className="header__left">
          <li className="header__left-item">
            <Link to="/" className="header__left-link">
              <img
                className="header__left-logo"
                src="https://hellodulich.com/wp-content/uploads/2021/06/logo-hello-du-lich-1.png"
              />
            </Link>
          </li>
          <li className="header__left-item">
            <Link to="/diadiem" href="" className="header__left-link">
              Địa điểm du lịch
              <i className="fa-solid fa-angle-down"></i>
              <div className="header__navbar ">
                <Link to="/diadiem/nhatrang">Nha Trang</Link>
                <Link to="/diadiem/phuquoc">Phú Quốc</Link>
                <Link to="/diadiem/dalat">Đà Lạt</Link>
              </div>
            </Link>
          </li>
          <li className="header__left-item">
            <Link to="/cndulich" className="header__left-link">
              Cẩm năng du lịch
              <i className="fa-solid fa-angle-down"></i>
              <div className="header__navbar ">
                <Link to="/diadiem/nhatrang">Cẩm nang Nha Trang</Link>
                <Link to="/diadiem/phuquoc">Cẩm nang Phú Quốc</Link>
                <Link to="/diadiem/dalat">Cẩm nang Đà Lạt</Link>
              </div>
            </Link>
          </li>
          <li className="header__left-item">
            <Link to="/cnanuong" href="" className="header__left-link">
              Cẩm nang ăn uống
              <i className="fa-solid fa-angle-down"></i>
              <div className="header__navbar ">
                <Link to="/diadiem/nhatrang">Ăn uống Nha Trang</Link>
                <Link to="/diadiem/phuquoc">Ăn uống Phú Quốc</Link>
                <Link to="/diadiem/dalat">Ăn uống Đà Lạt</Link>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="header__right">
          <li className="header__right-item user__item ">
            <div className="user__item-img">
              {isAuthentication ? (
                <img src={userInfo.attachment} alt="" />
              ) : (
                <Link
                  to="/login"
                  className="fa-solid fa-circle-user"
                  style={{
                    display: "block",
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "7px",
                  }}
                ></Link>
              )}
            </div>

            <span>{userInfo && userInfo.userName}</span>
            {isAuthentication ? (
              <div className="header__navbar ">
                {isAdmin ? (
                  <Link to={"/admin"}>
                    <span>Mannage</span>
                  </Link>
                ) : (
                  ""
                )}
                <span onClick={logout}>Đăng xuất</span>
              </div>
            ) : (
              ""
            )}
          </li>
          <li className="header__right-item">
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          <li className="header__right-item">
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
