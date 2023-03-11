import useTodos from "./hooks/useTodos";
import {
  QueryClient, QueryClientProvider,
} from 'react-query'
import Todos from "./components/todos";

// Create a client
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Bienvenue sur l'application de fetch en React</h1>

        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <Todos />
        </section>

      </div>
    </QueryClientProvider>

  );
}

export default App;
