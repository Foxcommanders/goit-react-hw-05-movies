import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { StyledSharedLayout } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <StyledSharedLayout>
      <Header />
      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
    </StyledSharedLayout>
  );
};

export default SharedLayout;
