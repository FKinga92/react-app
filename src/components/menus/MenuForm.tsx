import { useDispatch, useSelector } from 'react-redux';

import { getEmptyMenuItem } from '../../models/MenuItem';
import { AppDispatch } from '../../store';
import { menuFormSelectors } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';
import MenuItemFields from './MenuItemFields';

const MenuForm: React.FC = () => {
  const menu = useSelector(menuFormSelectors.getItem);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(menu);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(menuFormActions.updateName({ name: event.target.value }));
  };

  const onAddItem = () => {
    dispatch(menuFormActions.addMenuItem({ item: getEmptyMenuItem() }));
  };

  return (
    <form onSubmit={onSubmit}>
      {menu && (
        <div>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' value={menu.name} onChange={onNameChange} />
          </div>
          <div>
            <p>Items:</p>
            <button type='button' onClick={onAddItem}>
              Add item
            </button>
            {menu.items.map(item => (
              <MenuItemFields key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      <button>Add Menu</button>
    </form>
  );
};

export default MenuForm;
