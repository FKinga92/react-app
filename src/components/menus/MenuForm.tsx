import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MenuItemFields from './MenuItemFields';
import { MenuFormType } from '../../models/MenuForm';
import { getEmptyMenuItem } from '../../models/MenuItem';
import { AppDispatch } from '../../store';
import { menuFormSelectors } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';
import { menuActions } from '../../store/menu/menu-slice';

const MenuForm: React.FC<{ type: MenuFormType }> = props => {
  const menu = useSelector(menuFormSelectors.getItem);
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const isEditForm = props.type === MenuFormType.Edit;

  const redirect = () => {
    history.push({ pathname: '/' });
    dispatch(menuFormActions.clear());
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!menu) {
      return;
    }

    const actionToDispatch = isEditForm ? menuActions.updateMenu : menuActions.addMenu;
    dispatch(actionToDispatch({ menu }));
    redirect();
  };

  const onCancel = () => {
    redirect();
  };

  const onDelete = () => {
    dispatch(menuActions.deleteMenu({ id: menu!.id }));
    redirect();
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
          <button>{isEditForm ? 'Save' : 'Add menu'}</button>
          {isEditForm && (
            <div>
              <button type='button' onClick={onCancel}>
                Cancel
              </button>
              <button type='button' onClick={onDelete}>
                Delete Menu
              </button>
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default MenuForm;
