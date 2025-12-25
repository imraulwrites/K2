import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
