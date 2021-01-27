import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotePage from "./Pages/NotePage";
import EditPage from "./Pages/EditPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/notes/:id" component={NotePage} />
            <Route path="/edit/:id" component={EditPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
