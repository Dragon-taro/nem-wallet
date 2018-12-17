import { SimpleWallet } from "nem-library";

export interface Wallet {
  wallet?: SimpleWallet;
  loading: boolean;
}
