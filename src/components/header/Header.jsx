import React from "react";
import "./Header.scss";
import { HEADER_LINKS } from "../../static";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  const link_items = HEADER_LINKS?.map((link) => (
    <li className="navbar__item" key={link.id}>
      <a href="#">{link.title}</a>
    </li>
  ));
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="container">
          <ul className="navbar">
            <li key={1} className="navbar__item">
              <FaApple />
            </li>
            {link_items}
            <li key={2} className="navbar__item">
              <CiSearch />
            </li>
            <li key={3} className="navbar__item">
              <IoBagOutline />
            </li>
          </ul>
        </div>
      </div>

      <div className="header__p">
        <div className="container">
          <p>
            Starting 11/29, get an Apple Gift Card up to $200 when you buy an
            eligible product — online and in-store.1
            <a href="https://www.apple.com/shop/gifts/shopping-event">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
