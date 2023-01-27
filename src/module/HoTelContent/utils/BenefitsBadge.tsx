import React from "react";

const BenefitsBadge: React.FC<{ benefits: string[] | undefined }> = ({
  benefits,
}) => {
  return (
    <div className="flex space-x-2">
      {benefits?.map((benefit, i) => {
        if (i < 2) {
          return (
            <div key={i} className="badge-primary badge badge-sm p-3">
              {benefit}
            </div>
          );
        } else if (i == 2) {
          return (
            <div
              className="tooltip tooltip-primary"
              data-tip={benefits.slice(2)}
              key={i}
            >
              <div className="badge-primary badge badge-sm p-3">
                +{benefits.length - 2}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BenefitsBadge;
