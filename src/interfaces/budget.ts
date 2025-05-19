import { ReactNode } from "react";

export interface ITransactions {
  id?: string;
  transactionId: string;
  description: string;
  transactionDate: string;
  amount: number;
  type: string;
}

export interface BudgetState {
  walletBalance: number;
  incomeBalance: number;
  expensesBalance: number;
  transactions: ITransactions[];
  editTransaction: ITransactions | any;
}

export interface BudgetContextType {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetAction>;
}

export interface BudgetProviderProps {
  children: ReactNode;
}

export type BudgetAction =
  | { type: "SET_TRANSACTIONS"; payload: ITransactions[] }
  | { type: "SET_EDIT_TRANSACTION"; payload: ITransactions }
  | { type: "RESET_EDIT_TRANSACTION" };
