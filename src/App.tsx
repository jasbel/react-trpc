import { useState } from "react";
import "./App.css";
import { trpc } from "./trpc";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [queryClient, setQueryClient] = useState(() => new QueryClient());

  const [trpcClient, setTrpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:3000/trpc",
    })
  );
  return (
    <>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <AppContent />;
        </QueryClientProvider>
      </trpc.Provider>
    </>
  );
}

const AppContent = () => {
  const helloMessage = trpc.useQuery(["hello"]);
  console.log({ helloMessage });
  return <h1>world</h1>;
};

export default App;
