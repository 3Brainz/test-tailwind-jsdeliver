import { useEffect } from "react";
import { useSession } from "../_hooks/useSession";

export const TestButton = () => {
  const session = useSession();

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={() => {
        console.log("clicked");
        console.log(session);
      }}
    >
      Test
    </button>
  );
};
