import { useState } from "react";

export function Loading() {
  const [loadingDots, setLoadingDots] = useState("");

  setInterval(() => {
    const newDots = loadingDots === "..." ? "" : `${loadingDots}.`;
    setLoadingDots(newDots);
  }, 1000);

  return (
    <div className="Loading">
      <h2>{`Loading${loadingDots}`}</h2>
    </div>
  );
}
