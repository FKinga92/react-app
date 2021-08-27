import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MenuForm from '../components/menus/MenuForm';
import { MenuFormType } from '../models/MenuForm';
import { AppDispatch } from '../store';
import { menuFormActions } from '../store/menu-form/menu-form-slice';
import { menuSelectors } from '../store/menu/menu-selectors';

const EditMenuPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const menu = useSelector(menuSelectors.getMenu(parseInt(params.id)));
  const dispatch = useDispatch<AppDispatch>();

  if (menu) {
    dispatch(menuFormActions.setCurrentItem({ item: menu }));
  }

  return (
    <div>
      <h1>Edit menu</h1>
      <MenuForm type={MenuFormType.Edit} />
    </div>
  );
};

export default EditMenuPage;
