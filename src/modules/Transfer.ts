import { map, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { SignedTransaction, TransactionHttp } from "nem-library";
import { Action } from "../types/Action";
import { Observable } from "rxjs";
import { Transfer } from "../types/Transfer";

// constants
export const TRANSFER = "TRANSFER";
export const TRANSFER_SUCCESS = "TRANSFER_SUCCESS";

// actions
export const transfer = (
  signed: SignedTransaction
): Action<SignedTransaction> => ({
  type: TRANSFER,
  payload: signed
});
export const tarnsferSuccess = (): Action<{}> => ({
  type: TRANSFER_SUCCESS
});

// epics
export const transferEpic = (action$: Observable<Action<SignedTransaction>>) =>
  action$.pipe(
    ofType(TRANSFER),
    mergeMap(action => {
      const transactionHttp = new TransactionHttp();
      return transactionHttp.announceTransaction(
        action.payload as SignedTransaction
      );
    }),
    map(() => tarnsferSuccess())
  );

// initialState
const initialeState: Transfer = {
  loading: false,
  sent: false
};

// reducer
export const balanceReducer = (
  state: Transfer = initialeState,
  action: Action<SignedTransaction> | Action<{}>
): Transfer => {
  switch (action.type) {
    case TRANSFER:
      return { loading: true, sent: false };
    case TRANSFER_SUCCESS:
      return { loading: false, sent: true };
    default:
      return state;
  }
};
