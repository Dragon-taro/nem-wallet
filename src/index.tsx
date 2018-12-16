import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { NEMLibrary, NetworkTypes } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

class Root extends React.Component {
  render() {
    return <AppContainer />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
