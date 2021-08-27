import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/menus/Menu';
import { menuSelectors } from '../store/menu/menu-selectors';

const MenusPage: React.FC = () => {
  const menus = useSelector(menuSelectors.getMenus);

  return (
    <div>
      <h1>All Menus</h1>
      {menus.map(menu => (
        <Menu key={menu.id} id={menu.id} name={menu.name} items={menu.items} />
      ))}
    </div>
  );
};

export default MenusPage;
