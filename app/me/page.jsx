import Profile from "@/components/auth/Profile";
import axios from "axios";
import React from "react";

const getAddresses = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/address`);

  return data?.addresses;
};

const ProfilePage = async () => {
  const addresses = await getAddresses();

  return <Profile addresses={addresses} />;
};

export default ProfilePage;
