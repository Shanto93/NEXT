import React from "react";
import { notFound } from "next/navigation";

interface PhoneProps {
  params: {
    productId: string;
    phone: string;
  };
}

const PhonePage = ({ params }: PhoneProps) => {
  if (parseInt(params.productId) > 100) {
    notFound();
  }
  return (
    <div>
      Phone number is {params.productId} and Phone name is {params.phone}
    </div>
  );
};

export default PhonePage;

type PhonePropsMeta = {
  params: {
    productId: string;
    phone: string;
  };
};

export async function generateMetadata({
  params,
}: PhonePropsMeta): Promise<{ title: string; description: string }> {
  const { productId, phone } = params;
  return {
    title: `Phone ${productId} & ${phone}`,
    description: `Description of the ${phone}`,
  };
}
