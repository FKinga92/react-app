import { Link } from 'react-router-dom';

import classes from './Menu.module.css';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemModel } from '../../models/MenuItem';

const Menu: React.FC<{ id: number; name: string; items: MenuItemModel[] }> = props => {
  return (
    <div className={classes.menu}>
      <div className={classes['menu-name']}>
        <p>{props.name}</p>
        <Link to={`/edit-menu/${props.id}`}>Edit menu</Link>
      </div>
      <ul>
        {props.items.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
