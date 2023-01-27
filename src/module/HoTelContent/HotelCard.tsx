import React from "react";

type HotelCardProps = {
  children?: React.ReactNode;
};

const HotelCard: React.FC<HotelCardProps> = ({ children }) => {
  // Element in ChildrenList is [Picture,mainContent,sideContent]
  const ChildrenList = React.Children.toArray(children);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      {/* picture */}
      <figure>{ChildrenList[0]}</figure>
      <div className="card-body md:grid md:grid-cols-3">
        {/* main Content */}
        <div className="col-span-2">{ChildrenList[1]}</div>
        {/* side Content */}
        <div className="card-actions justify-end">{ChildrenList[2]}</div>
      </div>
    </div>
  );
};

export default HotelCard;
