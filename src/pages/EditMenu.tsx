import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from './Form.module.css';
import MenuForm from '../components/menus/MenuForm';
import { MenuFormType } from '../models/MenuForm';
import { AppDispatch } from '../store';
import { menuFormActions } from '../store/menu-form/menu-form-slice';
import { getMenu } from '../store/menu/menu-selectors';

const EditMenuPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const menu = useSelector(getMenu(parseInt(params.id)));
  const dispatch = useDispatch<AppDispatch>();

  if (menu) {
    dispatch(menuFormActions.setCurrentItem({ item: menu }));
  }

  return (
    <div className={classes['menu-form']}>
      <h1>Edit menu</h1>
      {menu ? <MenuForm type={MenuFormType.Edit} /> : <p>Could not find menu</p>}
    </div>
  );
};

export default EditMenuPage;
