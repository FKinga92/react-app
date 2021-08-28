import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MenuForm.css';
import MenuItemFields from './MenuItemFields';
import { MenuFormType } from '../../models/MenuForm';
import { getEmptyMenuItem } from '../../models/MenuItem';
import { AppDispatch } from '../../store';
import { menuFormSelectors } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';
import { menuActions } from '../../store/menu/menu-slice';
import { Menu } from '../../models/Menu';

const MenuForm: React.FC<{ type: MenuFormType }> = props => {
  const menuId = useSelector(menuFormSelectors.getEditedMenuId);
  const menuName = useSelector(menuFormSelectors.getItemName);
  const menuItems = useSelector(menuFormSelectors.getMenuItems);
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const isEditForm = props.type === MenuFormType.Edit;
  const nameInputIsInvalid = !menuName.isValid && menuName.isTouched;
  const hasInvalidMenuItems =
    menuItems.length === 0 || menuItems.some(item => !item.name.isValid || !item.price.isValid);
  const isValid = menuName.isValid && !hasInvalidMenuItems;
  const isTouched =
    menuName.isTouched || menuItems.some(item => item.name.isTouched || item.price.isTouched);

  const redirect = () => {
    history.push({ pathname: '/' });
    dispatch(menuFormActions.clear());
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(menuFormActions.setAllTouched());

    if (!menuId || !isValid) {
      return;
    }

    const actionToDispatch = isEditForm ? menuActions.updateMenu : menuActions.addMenu;
    const menu: Menu = {
      id: menuId,
      name: menuName.value,
      items: menuItems.map(item => ({
        id: item.id,
        name: item.name.value,
        price: item.price.value,
      })),
    };
    dispatch(actionToDispatch({ menu }));
    redirect();
  };

  const onCancel = () => {
    redirect();
  };

  const onDelete = () => {
    dispatch(menuActions.deleteMenu({ id: menuId }));
    redirect();
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(menuFormActions.updateName({ name: event.target.value.trim() }));
  };

  const onNameInputBlur = () => {
    dispatch(menuFormActions.setMenuNameIsTouched({ isTouched: true }));
  };

  const onAddItem = () => {
    dispatch(menuFormActions.addEmptyMenuItem({ item: getEmptyMenuItem() }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className='form-control'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={menuName.value}
            onChange={onNameChange}
            onBlur={onNameInputBlur}
          />
          {nameInputIsInvalid && <p className='error'>Name cannot be blank!</p>}
        </div>
        <div className='menu-items'>
          <div className='items'>
            <p>Items:</p>
            <button className='add' type='button' onClick={onAddItem}>
              Add item
            </button>
          </div>
          {isTouched && menuItems.length === 0 && (
            <p className='error'>Please add at least one menu item!</p>
          )}
          {menuItems.map(item => (
            <MenuItemFields key={item.id} id={item.id} />
          ))}
        </div>
        <div className='buttons'>
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
      </div>
    </form>
  );
};

export default MenuForm;
