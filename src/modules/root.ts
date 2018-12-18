import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { walletReducer, createWalletEpic } from "./Wallet";
import { getBalanceEpic, balanceReducer } from "./Balance";

export const rootEpic = combineEpics(createWalletEpic, getBalanceEpic);
export const rootReducer = combineReducers({
  wallet: walletReducer,
  balance: balanceReducer
});
