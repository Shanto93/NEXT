import React from "react";

interface PhoneProps {
  params: {
    productId: string;
    phone: string;
  };
}

const PhonePage = ({ params }: PhoneProps) => {
  return (
    <div>
      Phone number is {params.productId} and Phone name is {params.phone}
    </div>
  );
};

export default PhonePage;
