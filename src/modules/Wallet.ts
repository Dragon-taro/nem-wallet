import { map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { SimpleWallet, Password } from "nem-library";
import { Action } from "../types/Action";
import { Observable } from "rxjs";
import { Wallet } from "../types/Wallet";
import { ICreateWallet } from "../types/Wallet";

// constants
export const CREATE_WALLET = "CREATE_WALLET";
export const SET_WALLET = "SET_WALLET";
export const SET_LOCAL_WALLET = "SET_LOCAL_WALLET";
export const LOAD_WALLET = "LOAD_WALLET";

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
export const setLocalWallet = (
  payload: SimpleWallet
): Action<SimpleWallet> => ({
  type: SET_LOCAL_WALLET,
  payload
});
export const loadWallet = (): Action<{}> => ({
  type: LOAD_WALLET
});

// epics
export const createWalletEpic = (action$: Observable<Action<ICreateWallet>>) =>
  action$.pipe(
    ofType(CREATE_WALLET),
    map(action => {
      const password = new Password(action.payload!.password);
      const wallet = SimpleWallet.create(action.payload!.name, password);
      return wallet;
    }),
    map(payload => setLocalWallet(payload))
  );
export const setLocalWalletEpic = (action$: Observable<Action<SimpleWallet>>) =>
  action$.pipe(
    ofType(SET_LOCAL_WALLET),
    map(action => {
      const walletFile = action.payload!.writeWLTFile();
      localStorage.setItem("wallet", walletFile);
      return action.payload;
    }),
    map(wallet => setWallet({ wallet, loading: false }))
  );

// initialeState
const initialeState: Wallet = {
  wallet: undefined,
  loading: false
};

// reducer
export const walletReducer = (
  state: Wallet = initialeState,
  action: Action<Wallet> | Action<ICreateWallet> | Action<SimpleWallet>
): Wallet | {} => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
