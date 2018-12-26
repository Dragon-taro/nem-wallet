import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer, rootEpic } from "./modules/root";
import { NEMLibrary, NetworkTypes } from "nem-library";
import LoginContainer from "./containers/LoginContainer";
import WalletContainer from "./containers/WalletContainer";

NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);

const epicMiddleware = createEpicMiddleware();
function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}

const Root = () => {
  return (
    <Provider store={configureStore()}>
      <div>
        <WalletContainer />
        <LoginContainer />
      </div>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
