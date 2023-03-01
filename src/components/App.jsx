import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Loader } from '../components';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            height={'120'}
            width={'120'}
            color={'rgb(235, 40, 65)'}
            center={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/:productId" element={<ProductPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
