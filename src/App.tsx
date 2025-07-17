import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestButton } from "./_feats/TestButton";
import { AddinContext } from "./contexts/addinContext";
import type {
  IAddinContext,
  IGeotabApi,
  ICredentials,
} from "./contexts/addinContext";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    GeotabApi: new (credentials: ICredentials) => IGeotabApi;
  }
}

const queryClient = new QueryClient();

function App() {
  const [contextValue, setContextValue] = useState<IAddinContext | null>(null);

  useEffect(() => {
    const credentials = JSON.parse(
      localStorage.getItem("geotabAPI_credentials") || "{}"
    );
    const server = localStorage.getItem("geotabAPI_server");
    try {
      const geoApi = new window.GeotabApi({
        credentials: {
          database: credentials?.database,
          userName: credentials?.userName || "",
          password: credentials?.password || "",
          sessionId: credentials?.sessionId || "",
        },
        path: server || "",
      });
      console.log(geoApi);
      setContextValue({ geoApi });
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!contextValue) {
    return (
      <div className="p-4 text-white bg-black">Caricamento sessione...</div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AddinContext.Provider value={contextValue}>
        <div className="bg-red-500 w-full text-white text-center h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold underline">Hello World</h1>
          <TestButton />
        </div>
      </AddinContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
