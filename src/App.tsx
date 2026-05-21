import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, Registration, LoginPage } from './pages';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App