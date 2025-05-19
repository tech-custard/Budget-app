import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ITransactions } from "@interfaces/budget";
import { useBudget } from "@contexts/BudgetContext";

const fetchTransactionFn = async (): Promise<ITransactions[]> => {
  const response = await apiClient.get("/transactions");
  return response.data;
};

export function useFetchTransactions() {
  const { dispatch } = useBudget();

  const queryResult = useQuery<ITransactions[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactionFn,
    retry: 3,
  });

  React.useEffect(() => {
    if (queryResult.data) {
      dispatch({
        type: "SET_TRANSACTIONS",
        payload: queryResult.data,
      });
    }
  }, [queryResult.data, dispatch]);

  return queryResult;
}
