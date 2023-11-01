import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
