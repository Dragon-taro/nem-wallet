import * as React from "react";
import Wallet from "../components/Wallet";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { Action } from "../types/Action";
import { RootState } from "../types/RootState";
import { getBalance } from "../modules/Balance";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (dispatch: Dispatch<Action<Wallet>>) => ({
  actions: bindActionCreators({ getBalance }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
