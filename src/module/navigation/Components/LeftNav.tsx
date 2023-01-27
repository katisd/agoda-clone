import React from "react";
import Agoda_logo from "../../assets/Agoda_logo";
import MenuList from "./MenuList";

function LeftNav() {
  return (
    <div>
      {/* logo */}
      <a className="flex h-12 justify-center px-4 text-xl normal-case">
        <Agoda_logo />
      </a>
      {/* Link */}
      <div className="hidden flex-none sm:block">
        <span className="lg:hidden">{<MenuList />}</span>
        <span className="hidden lg:block">{<MenuList nMenu={6} />}</span>
      </div>
    </div>
  );
}

export default LeftNav;
