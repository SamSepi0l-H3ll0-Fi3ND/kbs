import React from "react";

const DashboardWrapper = ({ children }) => {
  return (
    <div className="p-6 flex flex-col min-w-min lg:flex-row min-h-screen md:max-h-screen">
      {children}
    </div>
  );
};

export default DashboardWrapper;
