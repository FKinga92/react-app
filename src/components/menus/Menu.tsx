import MenuItem from "../../models/MenuItem";

const Menu: React.FC<{ name: string; items: MenuItem[] }> = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
