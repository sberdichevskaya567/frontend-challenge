import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { EMainPath } from '../../../enum/router';
import './index.css';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <NavLink
        to={EMainPath.MAIN}
        className={({ isActive }) => (isActive ? 'link isActive' : 'link')}
      >
        Все котики
      </NavLink>
      <NavLink
        to={EMainPath.FAVORITE}
        className={({ isActive }) => (isActive ? 'link isActive' : 'link')}
      >
        Любимые котики
      </NavLink>
    </div>
  );
};

export default Header;
