import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// Pages 
import Index from './pages/Index'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

// Components
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Index /> : <Navigate to="/login" />}/>
            <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/" />}/>
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
