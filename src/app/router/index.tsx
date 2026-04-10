import { createBrowserRouter } from 'react-router-dom';
import { EMainPath } from '../../shared/enum/router';
import MainPage from '../../pages/main';
import FavoritePage from '../../pages/favorite';
import Layout from '../../widgets/layout';

const ROUTER_MAP = {
  [EMainPath.MAIN]: MainPage,
  [EMainPath.FAVORITE]: FavoritePage,
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...Object.entries(ROUTER_MAP).map(([path, Component]) => ({
        path,
        element: <Component />,
      })),
    ],
  },
]);

export default router;
