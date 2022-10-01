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
        <Route path={`/`}>
          <Homepage />
        </Route>
        <Route path={`/sign-up`}>
          <AccountCreate />
        </Route>
        <Route path={`/new-project`}>
          <ProjectCreate />
        </Route>
        <Route path={`/projects`}>
          <ProjectList />
        </Route>
        <Route path={`/project/:projectId`}>
          <ProjectPage projectId />
        </Route>
        <Route path={`/profile`}>
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRoute;