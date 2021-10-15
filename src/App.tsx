import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Software from "./pages/Software";
import HomeTools from "./Tools/HomeTools/HomeTools";
import Notifications from "./Tools/Notifications/Notifications";
import Goals from "./Tools/Goals/Goals";
import AddTools from "./Tools/AddTools/AddTools";
import Agenda from "./Tools/Agenda/Agenda";
import PostTips from "./Tools/PostTips/PostTips";
import TodoList from "./Tools/TodoList/TodoList";
import Spotify from "./Tools/Spotify/Spotify";
import TopTools from "./Tools/TopTools/TopTools";
import GroupChat from "./Tools/GroupChat/GroupChat";
import { Redirect } from "react-router";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute exact path='/app/home'>
            <Redirect to='/app/home' />
            <Software />
            <HomeTools />
          </PrivateRoute>
          <PrivateRoute exact path='/app/notifications'>
            <Redirect to='/app/home' />
            <Software />
            <Notifications />
          </PrivateRoute>
          <PrivateRoute exact path='/app/toptools'>
            <Redirect to='/app/home' />
            <Software />
            <TopTools />
          </PrivateRoute>
          <PrivateRoute exact path='/app/addtools'>
            <Redirect to='/app/home' />
            <Software />
            <AddTools />
          </PrivateRoute>
          <PrivateRoute exact path='/app/todoList'>
            <Redirect to='/app/home' />
            <Software />
            <TodoList />
          </PrivateRoute>
          <PrivateRoute exact path='/app/posttips'>
            <Redirect to='/app/home' />
            <Software />
            <PostTips />
          </PrivateRoute>
          <PrivateRoute exact path='/app/goals'>
            <Redirect to='/app/home' />
            <Software />
            <Goals />
          </PrivateRoute>
          <PrivateRoute exact path='/app/agenda'>
            <Redirect to='/app/home' />
            <Software />
            <Agenda />
          </PrivateRoute>
          <PrivateRoute exact path='/app/spotify'>
            <Redirect to='/app/home' />
            <Software />
            <Spotify />
          </PrivateRoute>
          <PrivateRoute exact path='/app/groupchat'>
            <Redirect to='/app/home' />
            <Software />
            <GroupChat />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
