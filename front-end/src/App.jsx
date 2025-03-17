import { AppRoute } from './Rotas'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();  
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoute />
    </QueryClientProvider>
  )
}

export default App
