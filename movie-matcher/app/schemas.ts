import { z } from "zod";

const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at meast 6 characters long" })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}/,
    "Password must cotain at least one lower case letter, one uppercase letter, one digit, one special character (@$!%*?&) and be at be netween 6 and 50 characters long"
  );
export const FormSchema = z.object({
  /*  id: z.string(), */
  firstName: z.string().trim().min(1, { message: "First name is Mandatory" }),
  lastName: z.string().trim().min(1, { message: "First name is Mandatory" }),
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().trim().email(),
  password: passwordSchema,
  confirmPassword: passwordSchema,
}); /* .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  }); */
type FormSchema = z.infer<typeof FormSchema>;
type dbSchema = Omit<FormSchema, "confirmPassword">;
