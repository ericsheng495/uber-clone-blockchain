import React from "react";
import Image from "next/image";
import profilePic from "../images/pfp.webp";
import { BsPerson } from "react-icons/bs";

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
};

const currentAccount = "";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Eric</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={profilePic}
            width={40}
            height={40}
            alt={""}
          />
        </div>
        {currentAccount ? (
          <div>0x0000.0000</div>
        ) : (
          <div className={style.loginButton}>
            <BsPerson></BsPerson>
            <span className={style.loginText}>please log in</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
