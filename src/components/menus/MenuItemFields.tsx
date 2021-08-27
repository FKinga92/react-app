import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MenuItem } from '../../models/MenuItem';
import { AppDispatch } from '../../store';
import { menuFormSelectors } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';

const MenuItemFields: React.FC<{ item: MenuItem }> = props => {
  const nameInputId = `item-name-${props.item.id}`;
  const priceInputId = `item-price-${props.item.id}`;

  const menuItem = useSelector(menuFormSelectors.getMenuItem(props.item.id));
  const dispatch = useDispatch<AppDispatch>();

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(menuFormActions.updateMenuItemName({ id: menuItem!.id, name: event.target.value }));
  };

  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      menuFormActions.updateMenuItemPrice({
        id: menuItem!.id,
        price: event.target.value.replace(/\D/, ''),
      })
    );
  };

  const onDelete = () => {
    dispatch(menuFormActions.deleteMenuItem({ id: menuItem!.id }));
  };

  return (
    <div>
      {menuItem && (
        <Fragment>
          <label htmlFor={nameInputId}>Name:</label>
          <input type='text' id={nameInputId} value={menuItem.name} onChange={onNameChange} />
          <label htmlFor={priceInputId}>Price:</label>
          <input type='number' id={priceInputId} value={menuItem.price} onChange={onPriceChange} />
          <button type='button' title='Delete item' onClick={onDelete}>
            X
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default MenuItemFields;
