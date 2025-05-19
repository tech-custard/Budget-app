import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@utils/helpers";
import ErrorMessage from "../ErrorMessage";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
  label?: string;
  error?: string;
  formField?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, isRequired, formField, ...props }, ref) => {
    return (
      <div className={`flex flex-col w-full ${formField && "h-25"}`}>
        {label && (
          <label className={`text-base font-semibold mb-2`}>
            {label} {isRequired && <span className="text-rose-600">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            className,
            formField
              ? "p-2 border border-bodydark1 focus:outline-none !bg-white rounded"
              : ""
          )}
          ref={ref}
          {...props}
        />
        {Boolean(error?.trim()) && (
          <ErrorMessage className="mt-1.5" message={error as string} />
        )}
      </div>
    );
  }
);
