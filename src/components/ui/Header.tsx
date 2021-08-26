import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div>Menu Manager</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Menus</Link>
          </li>
          <li>
            <Link to="/new-menu">Add New Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
