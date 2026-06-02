import { RouterProvider } from "react-router-dom";
import { MyRouter } from "./routes/router";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={MyRouter()}/>
      </QueryClientProvider>
    </div>
  )
}

export default App
{
  /* <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter> */
}
