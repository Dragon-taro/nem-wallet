import * as React from "react";
import { Wallet } from "../types/Wallet";
import { ICreateWallet } from "../modules/Wallet";
import { Action } from "../types/Action";

interface Props {
  wallet: Wallet;
  actions: {
    createWallet: (payload: ICreateWallet) => Action<ICreateWallet>;
  };
}

interface State {
  name: string;
  password: string;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { name: "", password: "" };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleCreate() {
    this.props.actions.createWallet(this.state);
  }

  render() {
    const { name, password }: State = this.state;
    return (
      <div>
        <h1>Walletの作成</h1>
        <div>
          <input
            type="text"
            value={name}
            name="name"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="password"
            value={password}
            name="password"
            onChange={e => this.handleChange(e)}
          />
          <button onClick={() => this.handleCreate()}>walletの作成</button>
        </div>
      </div>
    );
  }
}

export default Login;
