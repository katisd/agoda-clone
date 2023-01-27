import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const CostRange = () => {
  const { register, watch } = useFormContext();
  return (
    <>
      <input
        type="range"
        min={0}
        max={700}
        className="range range-sm "
        step={15}
        {...register("maxCost")}
      />
      <div className="place-self-center text-center text-2xl">
        0 - {watch("maxCost")}$
      </div>
    </>
  );
};

export default CostRange;
