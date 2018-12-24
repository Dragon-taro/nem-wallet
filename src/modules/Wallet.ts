import { map, mergeMap } from "rxjs/operators";
import { ofType, Epic } from "redux-observable";
import { SimpleWallet, Password } from "nem-library";
import { Action } from "../types/Action";
import { Observable } from "rxjs";
import { Wallet } from "../types/Wallet";
import { ICreateWallet } from "../types/Wallet";

// constants
export const CREATE_WALLET = "CREATE_WALLET";
export const SET_WALLET = "SET_WALLET";

// actions
export const createWallet = (
  payload: ICreateWallet
): Action<ICreateWallet> => ({
  type: CREATE_WALLET,
  payload
});
export const setWallet = (payload: Wallet): Action<Wallet> => ({
  type: SET_WALLET,
  payload
});

// epics
export const createWalletEpic = (action$: Observable<Action<ICreateWallet>>) =>
  action$.pipe(
    ofType(CREATE_WALLET),
    map(action => {
      const password = new Password(action.payload!.password);
      const simpleWallet = SimpleWallet.create(action.payload!.name, password);
      return simpleWallet;
    }),
    map(wallet => ({ wallet, loading: false })),
    map((wallet: Wallet) => setWallet(wallet))
  );

// initialeState
const initialeState: Wallet = {
  wallet: undefined,
  loading: false
};

// reducer
export const walletReducer = (
  state: Wallet = initialeState,
  action: Action<Wallet> | Action<ICreateWallet>
): Wallet | {} => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
