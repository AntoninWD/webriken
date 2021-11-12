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
import Messenger from "./Tools/Messenger/Messenger";
import { Redirect } from "react-router";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";
import Pomodoro from "./Tools/Pomodoro/Pomodoro";
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
            <Software component={<HomeTools />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/notifications'>
            <Redirect to='/app/home' />
            <Software component={<Notifications />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/messenger'>
            <Redirect to='/app/home' />
            <Software component={<Messenger />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/addtools'>
            <Redirect to='/app/home' />
            <Software component={<AddTools />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/todoList'>
            <Redirect to='/app/home' />
            <Software component={<TodoList />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/posttips'>
            <Redirect to='/app/home' />
            <Software component={<PostTips />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/goals'>
            <Redirect to='/app/home' />
            <Software component={<Goals />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/agenda'>
            <Redirect to='/app/home' />
            <Software component={<Agenda />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/spotify'>
            <Redirect to='/app/home' />
            <Software component={<Spotify />} />
          </PrivateRoute>
          <PrivateRoute exact path='/app/pomodoro'>
            <Redirect to='/app/home' />
            <Software component={<Pomodoro />} />
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
