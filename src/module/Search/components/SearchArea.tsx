import React from "react";
import { useFormContext } from "react-hook-form";

const SearchArea = () => {
  const { register } = useFormContext();
  return (
    <>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search…"
          className="input-bordered input"
          {...register("name")}
        />
      </div>
    </>
  );
};

export default SearchArea;
