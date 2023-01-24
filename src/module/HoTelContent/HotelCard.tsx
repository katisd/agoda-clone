import React from "react";

type HotelCardProps = {
  children?: React.ReactNode;
};

const HotelCard: React.FC<HotelCardProps> = ({ children }) => {
  // Element in ChildrenList is [Picture,mainContent,sideContent,footer(optional)]
  const ChildrenList = React.Children.toArray(children);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      {/* picture */}
      <figure>{ChildrenList[0]}</figure>
      <div className="card-body md:grid md:grid-cols-3">
        <div className="col-span-2">{ChildrenList[1]}</div>
        <div className="card-actions justify-end">{ChildrenList[2]}</div>
        {/* <div>{ChildrenList[3] ? <div>{ChildrenList[4]}</div> : null}</div> */}
      </div>
    </div>
  );
};

export default HotelCard;
