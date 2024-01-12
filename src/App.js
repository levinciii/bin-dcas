import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages 
import Index from './pages/Index'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

// Components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
