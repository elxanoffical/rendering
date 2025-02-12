"use client";

import { ServerSideFunction } from "../utils/server-utils";

export default function ClientRoutePage() {
  console.log("client route rendered");
  const result = ServerSideFunction();
  return (
    <div>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </div>
  );
}
