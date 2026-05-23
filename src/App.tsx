import { RouterProvider } from "react-router-dom";
import { MyRouter } from "./routes/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={MyRouter()} />
    </div>
  );
};

export default App;

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
