import React from "react";
import TopNav from "../../navigation/Components/TopNav";
import Filters from "../../Search/components/Filters";

type Props = {
  children: React.ReactNode;
  Filter: React.ReactNode;
};

const DashBoardLayout: React.FC<Props> = ({ children, Filter }) => {
  return (
    <>
      {/* nav bar on top  */}
      {/* <div> */}
      <TopNav />
      {/* </div> */}
      {/* containner of content */}
      <div className="container my-8 mx-auto flex flex-col lg:grid lg:grid-cols-4">
        {/* left side (filters) */}
        <div className="collapse mx-3 mb-5">
          <Filters />
        </div>
        <div className="md:col-span-3">
          <div className="mx-7 space-y-3">
            {children}
            {/* contents */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
