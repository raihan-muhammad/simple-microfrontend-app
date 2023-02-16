import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProgressBar from "./components/Progress";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const AuthLazay = lazy(() => import("./components/AuthApp"));
const MarketingLazay = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignIn={isSignedIn}
          />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/" exact>
                <MarketingLazay />
              </Route>
              <Route path="/auth">
                <AuthLazay onSignIn={() => setIsSignedIn(true)} />
              </Route>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};

export default App;
