import { Address, Asset, AccountHttp } from "nem-library";
import { Action } from "../types/Action";
import { Observable } from "rxjs";
import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

// constants
export const GET_BALANCE = "GET_BALANCE";
export const SET_BALANCE = "SET_BALANCE";

// actions
export const getBalance = (address: Address): Action<Address> => ({
  type: GET_BALANCE,
  payload: address
});
export const setBalance = (assets: Asset[]): Action<Asset[]> => ({
  type: SET_BALANCE,
  payload: assets
});

// epics
export const getBalanceEpic = (action$: Observable<Action<Address>>) =>
  action$.pipe(
    ofType(GET_BALANCE),
    mergeMap(action => {
      const accountHttp = new AccountHttp();
      return accountHttp.getAssetsOwnedByAddress(action.payload as Address);
    }),
    map(assets => {
      console.log(assets);
      return assets;
    }),
    map((assets: Asset[]) => setBalance(assets))
  );

// initialeState
const initialeState: Asset[] = [];

// reducer
export const balanceReducer = (
  state: Asset[] = initialeState,
  action: Action<Address>
): Asset[] => {
  switch (action.type) {
    case SET_BALANCE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
