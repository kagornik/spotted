import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./screens/WelcomePage";
import { PATH_ROUTES } from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={PATH_ROUTES.EMPTY} exact component={WelcomePage} />
    </Switch>
  );
};

export default App;
