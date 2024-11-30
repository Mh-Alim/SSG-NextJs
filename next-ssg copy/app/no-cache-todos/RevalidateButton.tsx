"use client";

import React from "react";
import Page from "./page";

export const RevalidateButton = () => {
  const handleRevalidate = async () => {
    // Call the server action to revalidate the cache
    const revalidate = (await import("@/app/lib/actions/action1")).default;
    await revalidate();
    alert("Cache revalidated!");
  };

  return (
    <>
      <button onClick={handleRevalidate} style={{ marginTop: "20px" }}>
        Revalidate Cache
      </button>
    </>
  );
};
