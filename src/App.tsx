import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestButton } from "./_feats/TestButton";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-red-500 w-full text-white text-center h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <TestButton />
      </div>
    </QueryClientProvider>
  );
}

export default App;
