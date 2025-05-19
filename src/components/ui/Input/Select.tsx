import React, { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@utils/helpers";
import ErrorMessage from "../ErrorMessage";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  isRequired?: boolean;
  label?: string;
  error?: string;
  formField?: boolean;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, error, label, isRequired, formField, options, ...props },
    ref
  ) => {
    return (
      <div className={`flex flex-col w-full ${formField && "h-25"}`}>
        {label && (
          <label className={`text-base font-semibold mb-2`}>
            {label} {isRequired && <span className="text-rose-600">*</span>}
          </label>
        )}
        <select
          className={cn(
            className,
            formField
              ? "p-2 border border-bodydark1 focus:outline-none rounded"
              : ""
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {Boolean(error?.trim()) && (
          <ErrorMessage className="mt-1.5" message={error as string} />
        )}
      </div>
    );
  }
);
