import { formatAmount } from "@utils/helpers";

interface IBalanceCard {
  title: string;
  amount: number;
}

export const BalanceCard = ({ title, amount }: IBalanceCard) => {
  return (
    <div className="w-full p-4 mb-4 mr-10 bg-white rounded-lg cursor-pointer sm:mb-0 min-h-28 font-mont z-999 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <p className="font-semibold">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-center">
        &#8358; {formatAmount(amount)}
      </p>
    </div>
  );
};
