import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { SimpleWallet, Password, NetworkTypes, NEMLibrary } from "nem-library";

// constants
export const CREATE_WALLET = "CREATE_WALLET";
export const SET_WALLET = "SET_WALLET";

// actions
export const createWallet = () => ({ type: CREATE_WALLET });
export const setWallet = () => ({ type: SET_WALLET });
