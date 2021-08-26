const Layout: React.FC = (props) => {
  return (
    <div>
      <header>Header</header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
