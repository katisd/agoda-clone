import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import CartButton from "./CartButton";

const SigninAndConfigButton = () => {
  return (
    <>
      <CartButton />
      {/* mobile */}
      <div className="dropdown-end dropdown lg:hidden">
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <Image
              src={"/anonymous-profile.jpg"}
              alt="profile picture"
              width={20}
              height={20}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li className="flex flex-row justify-between">
            <a className="btn-outline btn-accent btn">get started</a>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
      {/* desktop */}
      <span className=" hidden lg:block">
        <ThemeSwitch />
      </span>
      <button className="btn-outline btn-primary btn hidden lg:block">
        get started
      </button>
    </>
  );
};

export default SigninAndConfigButton;
