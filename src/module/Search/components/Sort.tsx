import React from "react";
import { useFormContext } from "react-hook-form";
import type { FilterValueType } from "../../../pages/_app";
import { SortOption } from "../../assets/staticObject";

const Sort: React.FC = () => {
  const { register } = useFormContext<FilterValueType>();
  return (
    <>
      <div className="btn-group w-full [&>input]:flex-1">
        <div className="btn-disabled  btn no-animation bg-base-300 font-semibold text-base-content">
          sort
        </div>
        {SortOption.map((option) => (
          <input
            key={option}
            type="radio"
            value={option}
            {...register("sort")}
            data-title={option}
            className="btn-primary btn-outline btn "
          />
        ))}
      </div>
    </>
  );
};

export default Sort;
