import React, { Component } from "react";
import '../App.css'
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/Home",
    exact: true,
  },
  {
    name: "Giới thiệu",
    to: "/About",
    exact: false,
  },
  {
    name: "Liên hệ",
    to: "/Contact",
    exact: false,
  },
  {
    name: "Sản phẩm",
    to: "/Products",
    exact: false,
  },
  {
    name: "Đăng Nhập",
    to: "/Login",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link className="my-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </nav>
    );
  }

  showMenu = () => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
