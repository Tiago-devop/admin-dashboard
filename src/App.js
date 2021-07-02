import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
