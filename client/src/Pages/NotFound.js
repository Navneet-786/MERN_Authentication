import React from "react";
import { TfiFaceSad } from "react-icons/tfi";
const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <h3 className="text-4xl font-semibold flex items-center gap-6">
        404 , Not Found <TfiFaceSad className="font-semibold" />
      </h3>
    </div>
  );
};

export default NotFound;
