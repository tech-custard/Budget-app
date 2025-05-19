import * as React from "react";
import { cn } from "@utils/helpers";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message, ...props }) => {
  const rootClassName = cn(`text-danger text-xs`, props.className);
  return <p className={rootClassName}>{message}</p>;
};

export default ErrorMessage;
