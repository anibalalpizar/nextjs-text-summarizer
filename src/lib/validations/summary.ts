import { z } from "zod";

export const sumarizeTextSchema = z.object({
  text: z
    .string()
    .min(1, { message: "The text must be at least 1 character long" })
    .max(300, { message: "The text must be at most 300 characters long" }),
});

export type SumarizeTextInput = z.infer<typeof sumarizeTextSchema>;
