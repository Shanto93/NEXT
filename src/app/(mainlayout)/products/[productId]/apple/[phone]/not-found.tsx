"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const singleProductId = pathname.split("/")[4];

  return (
    <div>
      Not found for products {productId} and also {singleProductId}
    </div>
  );
};

export default NotFound;
