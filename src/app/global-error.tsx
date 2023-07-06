"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Down",
  description: "Error",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
