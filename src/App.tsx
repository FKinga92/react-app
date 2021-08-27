import { Route, Switch } from 'react-router-dom';

import MenusPage from './pages/Menus';
import NewMenuPage from './pages/NewMenu';
import EditMenuPage from './pages/EditMenu';
import Layout from './components/ui/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <MenusPage />
          </Route>
          <Route path='/new-menu'>
            <NewMenuPage />
          </Route>
          <Route path='/edit-menu/:id'>
            <EditMenuPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
