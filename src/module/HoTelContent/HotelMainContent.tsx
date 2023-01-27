import React from "react";
import Star from "./utils/Star";
import Location from "./utils/Location";
import type { Hotel } from "./types/HotelsType";
import BenefitsBadge from "./utils/BenefitsBadge";

const HotelMainContent: React.FC<Hotel> = ({
  name,
  benefits,
  comments,
  location,
  star,
}) => {
  return (
    <div className="space-y-2">
      <div className="card-title">{name}</div>
      <div className="flex items-center space-x-3">
        <Star star={star} />
        <Location>{location}</Location>
      </div>
      <BenefitsBadge benefits={benefits} />
      <div>&quot;{comments ? comments[1] : null}&quot;</div>
    </div>
  );
};

export default HotelMainContent;
