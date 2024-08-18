import { Outlet, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from "react";
import './App.css';

const Home = lazy(() => import('./pages/Home.jsx'));
import Catalog from './pages/Catalog.jsx';
import Favorites from './pages/Favorites.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Features from './components/features/Features.jsx';
import Reviews from './components/features/reviews/Reviews.jsx';

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />}>
            <Route path=":camperId" element={<Outlet />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
