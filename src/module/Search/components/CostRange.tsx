import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const CostRange = () => {
  const { register, getValues, watch } = useFormContext();
  const [MaxCost, setMaxCost] = useState(0);
  useEffect(() => {
    setMaxCost(getValues("costRange") | 0);
  }, [watch("costRange")]);

  return (
    <>
      <input
        {...register("costRange")}
        type="range"
        min="0"
        max="7500"
        className="range range-sm"
        step="500"
      />
      <div className="place-self-center text-2xl">0 - {MaxCost}$</div>
    </>
  );
};

export default CostRange;
