import type { JSX } from 'react';
import './index.css';

const Loader = (): JSX.Element => {
  return (
    <div className="loader-container">
      <div className="spinner" />
    </div>
  );
};

export default Loader;
