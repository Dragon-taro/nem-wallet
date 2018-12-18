import * as React from "react";
import { Address, Asset, SimpleWallet } from "nem-library";
import { Action } from "../types/Action";
import { Wallet as IWallet } from "../types/Wallet";

interface Props {
  actions: {
    getBalance: (address: Address) => Action<Address>;
  };
  balance: Asset;
  wallet: IWallet;
}

interface State {}

class Wallet extends React.Component<Props, State> {
  componentDidMount() {
    const wallet = this.props.wallet.wallet;
    if (wallet) {
      const address = new Address(wallet.address.plain());
      this.props.actions.getBalance(address);
    }
  }

  render() {
    return <div>wallet</div>;
  }
}

export default Wallet;
