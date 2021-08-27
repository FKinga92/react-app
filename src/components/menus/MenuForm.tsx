import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getEmptyMenuItem } from '../../models/MenuItem';
import { AppDispatch } from '../../store';
import { menuFormSelectors } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';
import { menuActions } from '../../store/menu/menu-slice';
import MenuItemFields from './MenuItemFields';

const MenuForm: React.FC = () => {
  const menu = useSelector(menuFormSelectors.getItem);
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!menu) {
      return;
    }
    dispatch(menuActions.addMenu({ menu }));
    history.push({ pathname: '/' });
    dispatch(menuFormActions.clear());
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
