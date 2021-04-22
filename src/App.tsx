import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./screens/WelcomePage";
import MainPage from "./screens/MainPage";
import { PATH_ROUTES } from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={PATH_ROUTES.EMPTY} exact component={WelcomePage} />
      <Route path={PATH_ROUTES.MAIN_PAGE} component={MainPage} />
    </Switch>
  );
};

export default App;
