import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/menus/Menu";
import MenuModel from "../models/Menu";
import { RootState } from "../store";

const MenusPage: React.FC = () => {
  const menus = useSelector<RootState, MenuModel[]>((state) => state.menus);

  return (
    <div>
      <h1>All Menus</h1>
      {menus.map((menu) => (
        <Menu key={menu.id} name={menu.name} items={menu.items} />
      ))}
    </div>
  );
};

export default MenusPage;
