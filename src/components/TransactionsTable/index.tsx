import * as React from "react";
import { EmptyState } from "@components/common/EmptyState";
import { DateIcon } from "@assets/icons/DateIcon";
import { DeleteIcon } from "@assets/icons/DeleteIcon";
import { EditIcon } from "@assets/icons/EditIcon";
import { MoneyIcon } from "@assets/icons/MoneyIcon";
import { TextIcon } from "@assets/icons/TextIcon";
import { ITransactions } from "@interfaces/budget";
import { formatAmount } from "@utils/helpers";

interface Props {
  tableTitle?: string;
  tableData: ITransactions[];
  handleDeleteTransaction: (transactionId: string) => void;
  handleEditModal: (transaction: ITransactions) => void;
}

export const TransactionsTable: React.FC<Props> = ({
  tableTitle,
  tableData,
  handleDeleteTransaction,
  handleEditModal,
}) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold">{tableTitle}</h2>
      <div className="mt-3 border rounded-lg border-bodydark1">
        <div className="overflow-x-auto table-container">
          <table className="min-w-full divide-y divide-bodydark1">
            <thead>
              <tr className="divide-x divide-bodydark1">
                <th
                  scope="col"
                  className="w-full px-3 py-3 text-sm font-semibold text-left text-gray-900"
                >
                  <div className="flex">
                    <TextIcon className="w-4 h-4" />
                    <span className="pl-1">Description</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-full px-3 py-3 text-sm font-semibold text-left text-gray-900"
                >
                  <div className="flex">
                    <DateIcon className="w-4 h-4" />
                    <span className="pl-1">Date</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-full px-3 py-3 text-sm font-semibold text-left text-gray-900 "
                >
                  <div className="flex">
                    <MoneyIcon className="w-4 h-4" />
                    <span className="pl-1">Amount</span>
                  </div>
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bodydark1">
              {tableData?.length ? (
                tableData?.map((transaction: ITransactions, index) => (
                  <tr key={index} className="divide-x divide-bodydark1">
                    <td className="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap">
                      {transaction.description}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {transaction.transactionDate}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {formatAmount(transaction.amount)}
                    </td>
                    <td className="px-3 py-4">
                      <EditIcon
                        className={"w-5 h-5 text-meta-3 cursor-pointer"}
                        onClick={() => handleEditModal(transaction)}
                      />
                    </td>
                    <td className="px-3 py-4">
                      <DeleteIcon
                        className={"w-5 h-5 text-danger cursor-pointer"}
                        onClick={() =>
                          handleDeleteTransaction(`${transaction.id}`)
                        }
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-10">
                    <EmptyState
                      title={`No ${tableTitle} History`}
                      description={`No ${tableTitle} has been added, create a new transaction to get started`}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
