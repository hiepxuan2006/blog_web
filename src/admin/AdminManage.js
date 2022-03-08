import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Admin.scss";
import Header from "../component/HomePage/header/Header";
import { useSelector } from "react-redux";
function AdminManage(props) {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const Nav = [
    {
      display: "Danh Sách Tài Khoản",
      path: "/admin/list-user",
    },
    {
      display: "Thêm Tài Khoản",
      path: `/admin`,
    },
  ];
  const Nav2 = [
    {
      display: "Danh Sách Bài Viết",
      path: "/admin/list-post",
    },
    {
      display: "Thêm Bài Viết",
      path: `/admin/them-bai`,
    },
  ];
  const { pathname } = useLocation();

  const active = Nav.findIndex((e) => e.path === pathname);
  const active2 = Nav2.findIndex((e) => e.path === pathname);
  return (
    <div className="admin" style={{ padding: "0 10px 0 0" }}>
      <div className="grid " style={{ marginTop: "0" }}>
        <div className="row no-gutters">
          <div className="col l-3" style={{}}>
            <div className="admin__nav">
              <Link to={"/"}>
                <img
                  style={{
                    width: "200px",
                    margin: "0 auto",
                    paddingTop: "10px",
                  }}
                  src="https://hellodulich.com/wp-content/uploads/2021/06/logo-hello-du-lich-1.png"
                  alt=""
                />
              </Link>

              <div className="admin__user">
                <span>Quản Lý Tài Khoản</span>
                {Nav.map((item, i) => (
                  <ul className="admin__user-list" key={i}>
                    <li
                      key={i}
                      className={`admin__user-item ${i === active ? "active" : ""
                        }`}
                    >
                      <Link className="admin__user-link" to={item.path}>
                        {item.display}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="admin__post">
                <span>Quản Lý Bài Đăng</span>
                {Nav2.map((item, i) => (
                  <ul className="admin__post-list" key={i}>
                    <li key={i}
                      className={`admin__post-item ${i === active2 ? "active" : ""
                        }`}
                    >
                      <Link className="admin__post-link" to={item.path}>
                        {item.display}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="admin__info">
                <div className="admin__img">
                  <img src={`${userInfo && userInfo.attachment}`} alt="" />
                </div>
                <div className="admin__name">
                  <span>{userInfo && userInfo.userName}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-9 ">
            <div
              style={{
                margin: "70px 0 0 0px",
                border: "2px solid #ccc",
                overflowY: "auto",
                height: "80vh",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: " 10px",
              }}
            >
              <Outlet />
            </div>
            <h1> &copy; hiepxuan2006 </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManage;
