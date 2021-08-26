const MenuItem: React.FC<{ name: string; price: number }> = (props) => {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </li>
  );
};

export default MenuItem;
