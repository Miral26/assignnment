import React from "react";

const NoJobFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[91vh]">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2">No Jobs Found</h2>
        <p className="text-gray-600">
          Sorry, there are no jobs available at the moment.
        </p>
      </div>
    </div>
  );
};

export default NoJobFoundPage;
