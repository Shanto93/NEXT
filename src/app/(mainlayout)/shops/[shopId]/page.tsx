import React from "react";
import "./../../../styles/global.css";

// type PParams = {
//   params: {
//     shopId: string;
//   }
// };

const Shop = async ({ params }: { params: Promise<{ shopID: string }> }) => {
  const { shopID } = await params;
  return (
    <div>
      <p className="text-3xl">Details about Shop: {shopID} </p>
    </div>
  );
};

export default Shop;
