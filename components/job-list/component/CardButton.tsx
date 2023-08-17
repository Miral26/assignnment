import React from "react";
import Button from "../../button";

const CardButton = ({ applyType }: { applyType: string }) => {
  if (applyType === "Quick apply") {
    return (
      <Button
        className="bg-[#1597e4] text-white font-bold py-2 px-4 rounded"
        label="Apply Now"
      />
    );
  }
  if (applyType === "External apply") {
    return (
      <Button
        className="bg-transparent bg-[#1597e4] font-semibold  py-2 px-4 border border-[#1597e4] text-[#1597e4]  rounded"
        label="External Apply"
      />
    );
  }

  if (applyType === "") {
    return (
      <div className="flex justify-between absolute bottom-0 w-full">
        <Button
          className="bg-[#1597e4] text-white font-bold py-2 px-4 rounded"
          label="Apply Now"
        />

        <Button
          className="bg-transparent bg-[#1597e4] font-semibold  py-2 px-4 border border-[#1597e4] text-[#1597e4] rounded"
          label="External Apply"
        />
      </div>
    );
  }
};

export default CardButton;
