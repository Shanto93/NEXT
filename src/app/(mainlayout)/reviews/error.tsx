"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorReview = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  startTransition(() => {
    router.refresh();
    reset();
  });

  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
};

export default ErrorReview;
