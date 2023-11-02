import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesProvider from './context/Favorites';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <FavoritesProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/Movie/:name' element={<Movie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </FavoritesProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
