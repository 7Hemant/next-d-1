"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between items-center border-b py-4 relative">
      <div className="logo flex items-center">
        <div className="relative">
          <Image
            src="/assets/icons/logo.svg"
            width={36}
            height={36}
            alt="logo"
          />
        </div>
        <div className="relative w-4 h-4">
          <Image src="/assets/icons/Rightarrow.svg" alt="arrow" fill />
        </div>
      </div>
      <nav
        className={`bg-[#F2FBF9] ${
          toggle
            ? "absolute h-screen w-full z-50 top-16 left-0 right-0  flex-col  p-12 "
            : "hidden "
        } transition  ease-in-out duration-300 sm:relative sm:flex items-center space-x-8`}
      >
        <Link
          href="#"
          className={`${
            toggle
              ? "flex border-b py-4 w-[200px] ml-6   space-x-4 capitalize text-[1.2rem] mb-2 mt-4 "
              : ""
          }`}
        >
          <Image
            src="../../../assets/icons/Search.svg"
            width={22.5}
            height={22.5}
            alt="search"
          ></Image>
          <h1 className={`${toggle ? "text-[#233735] font-[400]" : "hidden"}`}>
            Search
          </h1>
        </Link>
        <Link
          href="#"
          className={`${
            toggle
              ? "flex border-b py-4 w-[200px]   space-x-4 capitalize text-[1.2rem] my-2"
              : ""
          }`}
        >
          <Image
            src="../../../assets/icons/MailInbox.svg"
            width={22.5}
            height={22.5}
            alt="mailbox"
          ></Image>
          <h1 className={`${toggle ? "text-[#233735] font-[400]" : "hidden"}`}>
            Inbox
          </h1>
        </Link>
        <Link
          href="#"
          className={`${
            toggle
              ? "flex border-b py-4 w-[200px]   space-x-4 capitalize text-[1.2rem] my-2"
              : ""
          }`}
        >
          <Image
            src="../../../assets/icons/notifaction.svg"
            width={22.5}
            height={22.5}
            alt="notifaction"
          ></Image>
          <h1 className={`${toggle ? "text-[#233735] font-[400]" : "hidden"}`}>
            Notifications
          </h1>
        </Link>
        <Link
          href="#"
          className={`${
            toggle
              ? "flex border-b py-4 w-[200px]   space-x-4 capitalize text-[1.2rem] my-2"
              : ""
          }`}
        >
          <Image
            src="../../../assets/icons/QuestionCircle.svg"
            width={22.5}
            height={22.5}
            alt="questionCircle"
          ></Image>
          <h1 className={`${toggle ? "text-[#233735] font-[400]" : "hidden"}`}>
            Help
          </h1>
        </Link>
        <Link
          href="#"
          className={`${
            toggle
              ? "flex border-b py-4 w-[200px]  absolute -top-5 sm:relative  space-x-4 capitalize text-[1.2rem]"
              : ""
          }`}
        >
          <Image
            src="/assets/images/profile.png"
            width={45}
            height={45}
            alt="profile"
          ></Image>
          <div className={`${toggle ? "" : "hidden"}`}>
            <h1 className="text-[#233735] font-[700]">Jane Smitj</h1>
            <p className="text-[#7B8786] font-[400]">Sales Executiv</p>
          </div>
        </Link>
      </nav>
      <button
        className={`${toggle ? "hidden" : "block"} sm:hidden`}
        onClick={() => setToggle(!toggle)}
      >
        <HiBars3 className="text-[1.3rem]" />
      </button>
      <button
        className={`${toggle ? "block" : "hidden"} sm:hidden`}
        onClick={() => setToggle(!toggle)}
      >
        <RxCross2 className="text-[1.5rem] font-[500] " />
      </button>
    </header>
  );
};

export default Header;
