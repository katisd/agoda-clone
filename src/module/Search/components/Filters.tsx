import React from "react";
import { useFormContext } from "react-hook-form";
import { FilterValueType } from "../../../pages/_app";
import MapBg from "../../assets/MapBg";
import {
  FilterList,
  FilterListChoseOne,
  FilterListRadio,
} from "../../assets/staticObject";
import CostRange from "./CostRange";
import SearchArea from "./SearchArea";
import SubFilter from "./SubFilter";

const Filters: React.FC<{ classNameOptional?: string }> = ({
  classNameOptional,
}) => {
  const { register, watch, unregister } = useFormContext<FilterValueType>();
  return (
    <div className={`${classNameOptional || ""} flex  flex-col space-y-5`}>
      <MapBg />
      {FilterListChoseOne.map(({ nameOfFilter, choices }) => (
        <select
          key={nameOfFilter}
          {...register("location")}
          className="select-bordered select select-lg w-full max-w-xs"
        >
          <option key={nameOfFilter} disabled value={nameOfFilter}>
            {nameOfFilter}
          </option>
          {choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      ))}
      <SearchArea />
      <CostRange />
      {FilterListRadio.map(({ nameOfFilter, choices }) => (
        <div
          key={nameOfFilter}
          className="collapse-plus rounded-box collapse border border-base-300 bg-base-100"
        >
          <input
            type="checkbox"
            className="peer"
            readOnly={true}
            onChange={(e) =>
              e.target.checked ? null : unregister(nameOfFilter)
            }
          />
          <div className="collapse-title ">{nameOfFilter}</div>
          <div className="collapse-content">
            <div className="rating">
              <input
                type="radio"
                name="rating-9"
                className="rating-hidden"
                checked={watch(nameOfFilter) ? false : true}
                readOnly={true}
              />
              {choices.map((choice) => (
                <input
                  key={choice}
                  value={choice}
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  {...register(nameOfFilter)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
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
