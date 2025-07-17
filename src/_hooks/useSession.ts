import { useContext, useEffect } from "react";
import { useState } from "react";
import { AddinContext } from "../contexts/addinContext";

export const useSession = () => {
  const [session, setSession] = useState<any>(null);
  const addinContext = useContext(AddinContext);

  useEffect(() => {
    addinContext.geoApi.getSession((token: any, host: string) => {
      console.log("token", token);
      console.log("host", host);
      setSession(token);
    }, false);
  }, []);

  return session;
};
