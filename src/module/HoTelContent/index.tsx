import React from "react";
import HotelCard from "./HotelCard";
import Image from "next/image";
import HotelMainContent from "./HotelMainContent";
import HotelSideContents from "./HotelSideContents";
import type { Hotel } from "./types/HotelsType";

const index: React.FC<{ prop: Hotel }> = ({ prop }) => {
  return (
    <HotelCard>
      {prop.pictureLink ? (
        <Image
          src={prop.pictureLink}
          alt="hotel"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src={`https://source.unsplash.com/random/500x500/?${prop.name}+hotel`}
          alt="hotel"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      )}
      <HotelMainContent {...prop} />
      <HotelSideContents {...prop} />
    </HotelCard>
  );
};

export default index;
