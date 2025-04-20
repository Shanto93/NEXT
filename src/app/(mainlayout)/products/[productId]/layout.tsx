import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Single Product Layout</div>
      {children}
    </div>
  );
};

export default layout;
