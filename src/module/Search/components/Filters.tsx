import React from "react";
import MapBg from "../../assets/MapBg";
import { FilterList } from "../../assets/staticObject";
import CostRange from "./CostRange";
import SearchArea from "./SearchArea";
import SubFilter from "./SubFilter";

const Filters = () => {
  return (
    <div className="flex w-full flex-col  space-y-5">
      <MapBg />
      <SearchArea />
      <CostRange />
      {FilterList.map(({ nameOfFilter, choices }) => (
        <div
          key={nameOfFilter}
          className="collapse-plus rounded-box collapse border border-base-300 bg-base-100"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title ">{nameOfFilter}</div>
          <div className="collapse-content">
            <div className="form-control">
              <SubFilter choices={choices} nameOfFilter={nameOfFilter} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
