import { useContext, useEffect } from "react";
import { useState } from "react";
import { AddinContext, type ICredentials } from "../contexts/addinContext";

export const useSession = () => {
  const [session, setSession] = useState<Partial<ICredentials> | null>(null);
  const addinContext = useContext(AddinContext);

  useEffect(() => {
    addinContext?.geoApi.getSession((res: ICredentials) => {
      setSession(res);
    }, false);
  }, []);

  return session;
};
