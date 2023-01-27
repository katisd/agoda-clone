import React from "react";

const Star: React.FC<{ star: number }> = ({ star }) => {
  return (
    <>
      <div className="rating rating-sm">
        {[...Array(star).keys()].map((_, i) => (
          <input key={i} className="mask mask-star-2 bg-orange-400" />
        ))}
      </div>
    </>
  );
};

export default Star;
