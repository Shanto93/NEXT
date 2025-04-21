import React from "react";

const Blogs = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  return (
    <div>
      <h1>All blogs are here....</h1>
    </div>
  );
};

export default Blogs;
