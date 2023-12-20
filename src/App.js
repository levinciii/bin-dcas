import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages 
import Index from './pages/Index'

// Components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Index />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
