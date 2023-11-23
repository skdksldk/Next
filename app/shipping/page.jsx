import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import Shipping from "@/components/cart/Shipping";

const getAddresses = async () => {
  const nextCookies = cookies();

  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  const { data } = await axios.get(`http://localhost:3000/api/address`, {
    headers: {
      Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
    },
  });

  return data?.addresses;
};

const ShippingPage = async () => {
  const addresses = await getAddresses();

  return <Shipping addresses={addresses} />;
};

export default ShippingPage;