import { useDispatch } from 'react-redux';

import MenuForm from '../components/menus/MenuForm';
import { getEmptyMenu } from '../models/Menu';
import { MenuFormType } from '../models/MenuForm';
import { AppDispatch } from '../store';
import { menuFormActions } from '../store/menu-form/menu-form-slice';

const NewMenuPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(menuFormActions.setCurrentItem({ item: getEmptyMenu() }));

  return (
    <div>
      <h1>Add a new menu</h1>
      <MenuForm type={MenuFormType.New} />
    </div>
  );
};

export default NewMenuPage;
