import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MenuItem } from '../../models/MenuItem';
import { AppDispatch } from '../../store';
import { menuFormSelectors } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';

const MenuItemFields: React.FC<{
  item: MenuItem;
}> = props => {
  const nameInputId = `item-name-${props.item.id}`;
  const priceInputId = `item-price-${props.item.id}`;

  const menuItem = useSelector(menuFormSelectors.getMenuItem(props.item.id));
  const dispatch = useDispatch<AppDispatch>();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!menuItem) {
      return;
    }
    dispatch(menuFormActions.updateMenuItemName({ id: menuItem.id, name: event.target.value }));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!menuItem) {
      return;
    }
    dispatch(
      menuFormActions.updateMenuItemPrice({
        id: menuItem.id,
        price: event.target.value.replace(/\D/, ''),
      })
    );
  };

  return (
    <div>
      {menuItem && (
        <Fragment>
          <label htmlFor={nameInputId}>Name:</label>
          <input type='text' id={nameInputId} value={menuItem.name} onChange={handleNameChange} />
          <label htmlFor={priceInputId}>Price:</label>
          <input
            type='number'
            id={priceInputId}
            value={menuItem.price}
            onChange={handlePriceChange}
          />
        </Fragment>
      )}
    </div>
  );
};

export default MenuItemFields;
