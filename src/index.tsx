import * as React from "react";
import * as ReactDOM from "react-dom";

class Root extends React.Component {
  render() {
    return <div>hello</div>;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
