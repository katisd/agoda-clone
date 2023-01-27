import React from "react";
import type { Hotel } from "./types/HotelsType";

export const HotelSideContents: React.FC<Hotel> = ({
  price,
  sale_price,
  rating,
}) => {
  return (
    <div className="md:flex-cols flex">
      <div className="divider divider-horizontal invisible md:visible" />
      <div className="flex flex-col items-end space-y-3">
        {/* rating */}
        <div className="flex h-10 w-10 place-content-center items-center rounded-t-full rounded-br-full bg-secondary">
          <a>{rating}</a>
        </div>
        <div className="flex flex-col items-end">
          {/* Tag eiter "MEGA SALE" when on Sale or "ONLY 3 LEFT" */}
          {sale_price ? (
            <div className="bg-red-600 p-1 text-sm font-bold text-white">
              MEGA SALE
            </div>
          ) : (
            <div className="bg-red-200 p-1 text-sm text-current">
              ONLY 3 LEFT
            </div>
          )}
          {/* price */}
          {sale_price ? (
            <>
              <div className="decoration-3 text-xl line-through decoration-error">
                {price}
              </div>
              <div className="text-2xl text-error">$ {sale_price}</div>
            </>
          ) : (
            <div className="text-2xl">$ {price}</div>
          )}
        </div>
        {/* button */}
        <button className="btn-primary btn">Select room</button>
      </div>
    </div>
  );
};
export default HotelSideContents;
