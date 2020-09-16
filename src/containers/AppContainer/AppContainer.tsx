import * as React from "react";
import { connect } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

export interface AppContainerProps {}

export class AppContainerImplementation extends React.Component<
  AppContainerProps
> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({});

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainerImplementation);
