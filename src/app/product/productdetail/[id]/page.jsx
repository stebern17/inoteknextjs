"useclient";
import React from "react";
import SingelProduct from "./SingelProduct";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  return (
    <>
      <SingelProduct id={id} />
    </>
  );
}
