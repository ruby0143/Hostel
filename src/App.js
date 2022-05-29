import Login from './components/Login/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main  from './components/main/Main';
import Admin from './components/admin/Admin';
import Submit from './components/submit/Submit';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/main">
            <Main />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/submit">
            <Submit />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
