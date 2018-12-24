import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { walletReducer, createWalletEpic } from "./Wallet";
import { getBalanceEpic, balanceReducer } from "./Balance";
import { transferEpic, transferReducer } from "./Transfer";

export const rootEpic = combineEpics(
  createWalletEpic,
  getBalanceEpic,
  transferEpic
);
export const rootReducer = combineReducers({
  wallet: walletReducer,
  balance: balanceReducer,
  transfer: transferReducer
});
