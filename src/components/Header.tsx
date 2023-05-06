import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex justify-between items-center border-b py-4">
      <div className="logo">
        <div>
          <div></div>
        </div>
      </div>
      <nav className="flex items-center space-x-8">
        <Link href="#">
          <Image
            src="../../../assets/icons/Search.svg"
            width={22.5}
            height={22.5}
            alt="search"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="../../../assets/icons/MailInbox.svg"
            width={22.5}
            height={22.5}
            alt="mailbox"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="../../../assets/icons/notifaction.svg"
            width={22.5}
            height={22.5}
            alt="notifaction"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="../../../assets/icons/QuestionCircle.svg"
            width={22.5}
            height={22.5}
            alt="questionCircle"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/images/profile.png"
            width={45}
            height={45}
            alt="profile"
          ></Image>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
