import * as React from "react";
import {
  Address,
  Asset,
  XEM,
  TimeWindow,
  EmptyMessage,
  TransferTransaction,
  Password,
  SignedTransaction
} from "nem-library";
import { Action } from "../types/Action";
import { Wallet as IWallet } from "../types/Wallet";

interface Props {
  actions: {
    getBalance: (address: Address) => Action<Address>;
    loadLocalWallet: () => Action<{}>;
    transfer: (signed: SignedTransaction) => Action<SignedTransaction>;
  };
  balance: Asset;
  wallet: IWallet;
}

interface State {
  address: string;
  amount: string;
  password: string;
}

class Wallet extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { address: "", amount: "0", password: "" };
  }

  componentDidMount() {
    const wallet = this.props.wallet.wallet;
    if (wallet) {
      const address = new Address(wallet.address.plain());
      this.props.actions.getBalance(address);
    } else {
      this.props.actions.loadLocalWallet();
    }
  }

  transferTransaction() {
    const transferTransaction = TransferTransaction.create(
      TimeWindow.createWithDeadline(),
      new Address(this.state.address),
      new XEM(Number(this.state.amount)),
      EmptyMessage
    );
    const account = this.props.wallet.wallet!.open(
      new Password(this.state.password)
    );
    const signed = account.signTransaction(transferTransaction);
    this.props.actions.transfer(signed);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Transfer</h2>
        <input
          type="text"
          placeholder="address"
          name="address"
          value={this.state.address}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number"
          name="amount"
          placeholder="amount"
          value={this.state.amount}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default Wallet;
