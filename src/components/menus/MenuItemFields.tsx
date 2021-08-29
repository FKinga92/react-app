import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { getMenuItem } from '../../store/menu-form/menu-form-selectors';
import { menuFormActions } from '../../store/menu-form/menu-form-slice';

const MenuItemFields: React.FC<{ id: number }> = props => {
  const nameInputId = `item-name-${props.id}`;
  const priceInputId = `item-price-${props.id}`;

  const menuItem = useSelector(getMenuItem(props.id));
  const dispatch = useDispatch<AppDispatch>();

  const nameInputIsInvalid = !!menuItem && !menuItem.name.isValid && menuItem.name.isTouched;
  const priceInputIsInvalid = !!menuItem && !menuItem.price.isValid && menuItem.price.isTouched;

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      menuFormActions.updateMenuItemName({ itemId: menuItem!.id, name: event.target.value.trim() })
    );
  };

  const onNameInputBlur = () => {
    dispatch(menuFormActions.setMenuItemNameIsTouched({ itemId: menuItem!.id, isTouched: true }));
  };

  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      menuFormActions.updateMenuItemPrice({
        itemId: menuItem!.id,
        price: event.target.value.replace(/\D/, ''),
      })
    );
  };

  const onPriceInputBlur = () => {
    dispatch(menuFormActions.setMenuItemPriceIsTouched({ itemId: menuItem!.id, isTouched: true }));
  };

  const onDelete = () => {
    dispatch(menuFormActions.deleteMenuItem({ itemId: menuItem!.id }));
  };

  return (
    <div className='menu-item'>
      {menuItem && (
        <Fragment>
          <div>
            <div className='form-control'>
              <label htmlFor={nameInputId}>Name:</label>
              <input
                type='text'
                id={nameInputId}
                value={menuItem.name.value}
                onChange={onNameChange}
                onBlur={onNameInputBlur}
              />
              {nameInputIsInvalid && <p className='error'>Name cannot be blank!</p>}
            </div>
            <div className='form-control'>
              <label htmlFor={priceInputId}>Price:</label>
              <input
                type='number'
                id={priceInputId}
                value={menuItem.price.value}
                onChange={onPriceChange}
                onBlur={onPriceInputBlur}
              />
              {priceInputIsInvalid && <p className='error'>Price cannot be blank or 0!</p>}
            </div>
          </div>
          <button className='delete-item' type='button' title='Delete item' onClick={onDelete}>
            X
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default MenuItemFields;
