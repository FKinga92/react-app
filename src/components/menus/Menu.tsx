import { Link } from 'react-router-dom';

import MenuItem from './MenuItem';
import { MenuItem as MenuItemModel } from '../../models/MenuItem';

const Menu: React.FC<{ id: number; name: string; items: MenuItemModel[] }> = props => {
  return (
    <div>
      <p>
        <Link to={`/edit-menu/${props.id}`}>{props.name}</Link>
      </p>
      <ul>
        {props.items.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
