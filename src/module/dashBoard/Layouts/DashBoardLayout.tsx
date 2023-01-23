import React from "react";
import Navigation from "../../navigation/Components";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* nav bar on top  */}
      <div>
        <Navigation />
      </div>
      {/* containner of content */}
      <div className="container flex">
        {/* side filters */}

        {/* contents */}
        {children}
      </div>
    </>
  );
};

export default DashBoardLayout;
