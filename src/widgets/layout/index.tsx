import { Outlet } from 'react-router-dom';
import type { JSX } from 'react';
import './index.css';
import Header from '../../shared/components/layout/header';

const Layout = (): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
