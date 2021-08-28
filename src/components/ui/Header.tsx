import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Menu Manager</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to='/'>All Menus</Link>
          </li>
          <li>
            <Link to='/new-menu'>Add New Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
