import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function NavBar() {
  return (
    <div className="h-14 w-full bg-base-200">
      <div className="navbar flex justify-between bg-base-100">
        {/* Left */}
        <LeftNav />
        {/* Right side of nav */}
        <RightNav />
      </div>
    </div>
  );
}

export default NavBar;
