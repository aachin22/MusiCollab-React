import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccountCreate from "../AccountCreate";
import Homepage from "../Homepage";
import ProfilePage from "../ProfilePage";
import ProjectCreate from "../ProjectCreate";
import ProjectList from "../ProjectList";
import ProjectPage from "../ProjectPage";

const MainRoute = () => {

  return (
    <Router>
      <Switch>
        <Route path={`/`} exact>
          <Homepage />
        </Route>
        <Route path={`/sign-up`} exact>
          <AccountCreate />
        </Route>
        <Route path={`/new-project`} exact>
          <ProjectCreate />
        </Route>
        <Route path={`/projects`} exact>
          <ProjectList />
        </Route>
        <Route path={`/project/:projectId`} exact>
          <ProjectPage projectId />
        </Route>
        <Route path={`/profile`} exact>
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRoute;