// React Types
import { FC } from 'react';

// Component Level Types
interface NavbarProps {
  currentAccountAddress: string;
}

const Navbar: FC<NavbarProps> = ({ currentAccountAddress }) => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow mb-5">
      <p className="navbar-brand my-auto">Election Dapp</p>
      <ul className="navbar-nav">
        <li className="nav-item text-white">{currentAccountAddress}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
