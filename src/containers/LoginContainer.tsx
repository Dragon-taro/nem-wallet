import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import Login from "../components/Login";
import { connect } from "react-redux";
import { Wallet } from "../types/Wallet";
import { createWallet } from "../modules/Wallet";
import { Action } from "../types/Action";

interface RootState {
  wallet: Wallet;
}

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (dispatch: Dispatch<Action<Wallet>>) => ({
  actions: bindActionCreators({ createWallet }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
