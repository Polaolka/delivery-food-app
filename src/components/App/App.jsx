import { useSelector } from 'react-redux';
import { MainContainer } from './App.styled';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import { Loader } from 'components/Loader/Loader';
import Home from 'pages/Home';
import { selectIsLoading } from 'redux/loader/selectors';
import { ToastContainer } from 'react-toastify';

// const Home = lazy(() => import('pages/Home'));
const Cart = lazy(() => import('pages/Cart'));
const History = lazy(() => import('pages/History'));
const Coupons = lazy(() => import('pages/Coupons'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}

      {<MainContainer>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />}/>
              <Route path="cart" element={<Cart />}/>
              <Route path="history" element={<History />}/>
              <Route path="coupons" element={<Coupons />}/>
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
          <ToastContainer/>
        </MainContainer>}
    </>
  );
};

export default App;
