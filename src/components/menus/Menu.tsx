import { MenuItem as MenuItemModel } from '../../models/MenuItem';
import MenuItem from './MenuItem';

const Menu: React.FC<{ name: string; items: MenuItemModel[] }> = props => {
  return (
    <div>
      <p>{props.name}</p>
      <ul>
        {props.items.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
