import React from "react";
import TopNav from "../../navigation/Components/TopNav";
import Filters from "../../Search/components/Filters";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* nav bar on top  */}
      <TopNav />
      {/* containner of content */}
      <div className="container my-8 mx-auto grid grid-cols-3 lg:grid-cols-4">
        {/* left side (filters) */}
        <Filters classNameOptional="hidden lg:block" />
        {/* contents */}
        <div className="col-span-3">{children}</div>
      </div>
    </>
  );
};

export default DashBoardLayout;
