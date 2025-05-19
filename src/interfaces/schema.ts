import { z } from "zod";

// Define Zod schema for form data validation
export const transactionSchema = z.object({
  description: z
    .string()
    .min(1, { message: "Description must contain at least 1 character(s)" }),
  type: z.enum(["Income", "Expenses"], {
    message: "Transaction type must be either Income or Expenses",
  }),
  amount: z
    .number({
      required_error: "required field",
      invalid_type_error: "Amount cannot be empty",
    })
    .min(1),
});

// Define types for form data
export type FormData = z.infer<typeof transactionSchema>;
