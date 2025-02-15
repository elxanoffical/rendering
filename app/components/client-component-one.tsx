"use client";
import React, { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("batman");
  return (
    <>
      <h1>Client component one</h1>
      {children}
    </>
  );
};
