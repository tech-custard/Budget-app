import * as React from "react";
import { EmptyIcon } from "@assets/icons/EmptyIcon";

interface Props {
  title: string;
  description: string;
}

export const EmptyState: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-sm text-center">
      <EmptyIcon />
      <p className="py-2">{title}</p>
      <p>{description}</p>
    </div>
  );
};
