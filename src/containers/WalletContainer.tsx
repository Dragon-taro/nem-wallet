import * as React from "react";
import Wallet from "../components/Wallet";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { Action } from "../types/Action";
import { RootState } from "../types/RootState";
import { loadLocalWallet } from "../modules/Wallet";
import { getBalance } from "../modules/Balance";
import { transfer } from "../modules/Transfer";
import { connect } from "react-redux";
import { SignedTransaction, Address } from "nem-library";

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (
  dispatch: Dispatch<Action<Address> | Action<SignedTransaction>>
) => ({
  actions: bindActionCreators(
    { getBalance, transfer, loadLocalWallet },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
