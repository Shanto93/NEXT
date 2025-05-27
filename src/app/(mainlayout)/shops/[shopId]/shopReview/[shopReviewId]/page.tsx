import React from "react";

const ShopReviewId = async ({
  params,
}: {
  params: Promise<{ shopId: string; shopReviewId: string }>;
}) => {
  const { shopId, shopReviewId } = await params;
  return (
    <div>
      <p>This is Shop Review Id Page</p>
      <p>Shop No: {shopId} </p>
      <p>Individual Review: {shopReviewId} </p>
    </div>
  );
};

export default ShopReviewId;
