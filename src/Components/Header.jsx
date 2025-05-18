import React, { useState } from "react";
import { LuTag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const links = (
    <>
      <li>
        <details>
          <summary>Home</summary>
          <ul className="p-2">
            <li>
              <a>Home One</a>
            </li>
            <li>
              <a>Home Tow</a>
            </li>
            <li>
              <a>Home Three</a>
            </li>
            <li>
              <a>Home Four</a>
            </li>
            <li>
              <a>Home Five</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Browse Coupons</summary>
          <ul className="p-2">
            <li>
              <a>Coupon One</a>
            </li>
            <li>
              <a>Coupon Tow</a>
            </li>
            <li>
              <a>Submit Coupon</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Store</summary>
          <ul className="p-2">
            <li>
              <a>Stores</a>
            </li>
            <li>
              <a>Store Tow</a>
            </li>
            <li>
              <a>Store Three</a>
            </li>
            <li>
              <a>Store Four</a>
            </li>
            <li>
              <a>Store Five</a>
            </li>
            <li>
              <a>Store Six</a>
            </li>
            <li>
              <a>Store Details</a>
            </li>
            <li>
              <a>Store Details Tow</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li>
              <a>Category One</a>
            </li>
            <li>
              <a>Category Tow</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Blogs</summary>
          <ul className="p-2">
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Blogs Details</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Earn and share</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
            <li>
              <a>Sign In</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Trams and Conditions</a>
            </li>
            <li>
              <a>Error 404</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  const [isOpenNav, setIsOpenNav] = useState(false);
  const showNav = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          {isOpenNav && (
            <div className="absolute top-12 left-0 w-full bg-slate-800 shadow-md md:hidden z-20">
              <ul className="menu menu-vertical w-full p-4">{links}</ul>
            </div>
          )}
        </div>
        <Link>
          <img src="src/assets/logo1.webp" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="hidden md:flex">
          <a className="border-x-1 px-4">
            <LuTag size={28} />
          </a>
          <a className="border-x-1 px-4">
            <FaRegHeart size={28} />
          </a>
        </div>
        <div onClick={showNav} className="flex md:hidden">
          <IoMenu size={28} />
        </div>
      </div>
    </div>
  );
};

export default Header;
