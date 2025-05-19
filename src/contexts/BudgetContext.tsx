import * as React from "react";
import { budgetReducer } from "@contexts/reducers/budgetReducer";
import {
  BudgetContextType,
  BudgetProviderProps,
  ITransactions,
} from "@interfaces/budget";

const initialState = {
  walletBalance: 0,
  incomeBalance: 0,
  expensesBalance: 0,
  transactions: [],
  editTransaction: {},
};

const BudgetContext = React.createContext<BudgetContextType | null>(null);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = React.useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = React.useContext(BudgetContext);
  if (!context)
    throw new Error("Budget context can only be used within budget provider");
  return context;
};

// Filter the incomes and expenses from transactions array
export const getIncomeTransactions = (transactions: ITransactions[]) =>
  transactions.filter((transaction) => transaction.type === "Income");

export const getExpenseTransactions = (transactions: ITransactions[]) =>
  transactions.filter((transaction) => transaction.type === "Expenses");
