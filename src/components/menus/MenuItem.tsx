import classes from './MenuItem.module.css';

const MenuItem: React.FC<{ name: string; price: string }> = props => {
  return (
    <li className={classes['menu-item']}>
      <p>{props.name}</p>
      <p>{props.price + '$'}</p>
    </li>
  );
};

export default MenuItem;
