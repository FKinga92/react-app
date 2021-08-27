import { Route, Switch } from 'react-router-dom';

import MenusPage from './pages/Menus';
import Layout from './components/ui/Layout';
import NewMenuPage from './pages/NewMenu';

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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
