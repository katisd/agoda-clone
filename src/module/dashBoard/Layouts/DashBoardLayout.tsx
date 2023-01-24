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
      {/* <div> */}
      <TopNav />
      {/* </div> */}
      {/* containner of content */}
      <div className="container my-8 mx-auto grid grid-cols-4">
        {/* left side (filters) */}
        <div>
          <Filters />
        </div>
        {/* contents */}
        <div className="col-span-3">{children}</div>
      </div>
    </>
  );
};

export default DashBoardLayout;
