import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";

class Root extends React.Component {
  render() {
    return <AppContainer />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
