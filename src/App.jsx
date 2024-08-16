import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from "react";
import './App.css'

const Home = lazy(() => import('./pages/Home.jsx'));
import Catalog from './pages/Catalog.jsx';
import Favorites from './pages/Favorites.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';

const App = () => {
  return <>
    <Navigation />
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </>


};

export default App;
