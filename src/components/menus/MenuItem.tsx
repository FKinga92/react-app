const MenuItem: React.FC<{ name: string; price: string }> = props => {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.price + '$'}</p>
    </li>
  );
};

export default MenuItem;
