import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { walletReducer, createWalletEpic } from "./Wallet";

export const rootEpic = combineEpics(createWalletEpic);
export const rootReducer = combineReducers({
  walletReducer
});
