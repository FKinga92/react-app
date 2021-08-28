import { useSelector } from 'react-redux';

import classes from './Menus.module.css';
import Menu from '../components/menus/Menu';
import { menuSelectors } from '../store/menu/menu-selectors';

const MenusPage: React.FC = () => {
  const menus = useSelector(menuSelectors.getMenus);

  return (
    <div className={classes.menus}>
      {menus.map(menu => (
        <Menu key={menu.id} id={menu.id} name={menu.name} items={menu.items} />
      ))}
    </div>
  );
};

export default MenusPage;
