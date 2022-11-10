import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";


function App() {
  // localhost:3000/favorites
  return (
    <Layout>
      
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </ Layout>

  );
}

export default App;
