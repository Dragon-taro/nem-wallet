import * as React from "react";

interface Props {}

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
        </div>
      </div>
    );
  }
}

export default Login;
