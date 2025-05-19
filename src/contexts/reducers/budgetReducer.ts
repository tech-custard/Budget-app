import { BudgetAction, BudgetState, ITransactions } from "@interfaces/budget";
import { updateBalances } from "@utils/helpers";

const setTransactions = (state: BudgetState, transactions: ITransactions[]) => {
  const balances = updateBalances(transactions);
  return {
    ...state,
    transactions,
    ...balances,
  };
};

const setEditTransaction = (state: BudgetState, transaction: ITransactions) => {
  return {
    ...state,
    editTransaction: transaction,
  };
};

export const budgetReducer = (
  state: BudgetState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return setTransactions(state, action.payload);
    case "SET_EDIT_TRANSACTION":
      return setEditTransaction(state, action.payload);
    case "RESET_EDIT_TRANSACTION":
      return { ...state, editTransaction: null };
    default:
      return state;
  }
};
