import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import TeamBar from './components/TeamBar';
import ChatBox from './components/ChatBox';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/TeamBar">
            <TeamBar userName="Abdullah" userRole="admin" />
          </Route>
          <Route exact path="/ChatBox">
            <ChatBox />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
