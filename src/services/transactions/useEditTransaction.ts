import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ITransactions } from "@interfaces/budget";
import toast from "react-hot-toast";

const editTransactionFn = async (newTransaction: ITransactions) => {
  const response = await apiClient.patch(
    `/transactions/${newTransaction.id}`,
    newTransaction
  );
  return response.data;
};

export function useEditTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTransactionFn,
    onMutate: async (newTransaction: ITransactions) => {
      // Cancel current queries for the transactions list
      await queryClient.cancelQueries({ queryKey: ["transactions"] });

      const previousTransactions = queryClient.getQueryData<ITransactions[]>([
        "transactions",
      ]);

      queryClient.setQueryData(["transactions"], (old: ITransactions[] = []) =>
        old.map((transaction) =>
          Number(transaction.id) === Number(newTransaction.id)
            ? { ...transaction, ...newTransaction }
            : transaction
        )
      );

      // Return context with the optimistic transaction
      return { previousTransactions, optimisticTransaction: newTransaction };
    },
    onSuccess: (result, variables, context) => {
      toast.success("Transaction edited successfully", {
        duration: 4000,
        position: "top-center",
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(["transactions"], context?.previousTransactions);

      toast.error("Failed to edit transaction", {
        duration: 4000,
        position: "top-center",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
