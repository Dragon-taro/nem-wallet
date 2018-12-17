import { map, mergeMap } from "rxjs/operators";
import { ofType, Epic } from "redux-observable";
import { SimpleWallet, Password } from "nem-library";
import { Action } from "../types/Action";

// interface
interface Payload {
  name: string;
  password: string;
}

// constants
export const CREATE_WALLET = "CREATE_WALLET";
export const SET_WALLET = "SET_WALLET";

// actions
export const createWallet = () => ({ type: CREATE_WALLET });
export const setWallet = () => ({ type: SET_WALLET });

// epics
export const createWalletEpic: Epic<Action<Payload>, any, SimpleWallet> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(CREATE_WALLET),
    // ここでwalletを作成
    map(() => setWallet())
  );

// reducer
export const weatherReducer = (
  state: SimpleWallet | undefined,
  action: Action<Payload>
): SimpleWallet | undefined => {
  switch (action.type) {
    case SET_WALLET:
      return state;
    default:
      return state;
  }
};
