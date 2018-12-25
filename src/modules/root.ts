import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import {
  walletReducer,
  createWalletEpic,
  setLocalWalletEpic,
  loadWalletEpic
} from "./Wallet";
import { getBalanceEpic, balanceReducer } from "./Balance";
import { transferEpic, transferReducer } from "./Transfer";

export const rootEpic = combineEpics(
  createWalletEpic,
  setLocalWalletEpic,
  loadWalletEpic,
  getBalanceEpic,
  transferEpic
);
export const rootReducer = combineReducers({
  wallet: walletReducer,
  balance: balanceReducer,
  transfer: transferReducer
});
