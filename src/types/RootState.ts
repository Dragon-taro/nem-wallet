import { Wallet } from "./Wallet";
import { Balance } from "./Balance";
import { Transfer } from "./Transfer";

export interface RootState {
  wallet: Wallet;
  balance: Balance;
  transfer: Transfer;
}
