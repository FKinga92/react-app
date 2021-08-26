import { Route, Switch } from "react-router-dom";

import MenusPage from "./pages/Menus";
import MenuForm from "./pages/MenuForm";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <MenusPage />
          </Route>
          <Route path="/new-menu">
            <MenuForm />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
