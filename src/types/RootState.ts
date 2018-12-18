import { Wallet } from "./Wallet";
import { Balance } from "./Balance";

export interface RootState {
  wallet: Wallet;
  balance: Balance;
}
