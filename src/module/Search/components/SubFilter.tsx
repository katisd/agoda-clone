import React from "react";
import { useFormContext } from "react-hook-form";
import { FilterValueType } from "../../../pages/_app";
import { type FilterProps } from "../types/FilterType";

// return checkbox choices
const SubFilter: React.FC<FilterProps> = ({ choices, nameOfFilter }) => {
  const { register } = useFormContext<FilterValueType>();
  return (
    <>
      {choices?.map((choice) => (
        <label key={choice} className="label cursor-pointer">
          <span className="label-text">{choice}</span>
          <input
            type="checkbox"
            {...register(nameOfFilter)}
            value={choice}
            className="checkbox"
          />
        </label>
      ))}
    </>
  );
};

export default SubFilter;
