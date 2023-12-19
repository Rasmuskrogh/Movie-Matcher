"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
/* .refine((data) => data.password === data.confirmPassword, {
      message: "Password doesn't match",
      path: ["confirmPassword"],
    }); */

const CreateAccount = FormSchema.omit({ id: true, confirmPassword: true });

export async function createAccount(formData: FormData) {
  "use server";
  const { firstName, lastName, username, email, password } =
    CreateAccount.parse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

  await sql`
      INSERT INTO accounts (Firstname, Lastname, Username, Email, Password)
      VALUES (${firstName},${lastName},${username},${email},${password})
      `;

  revalidatePath("/login");
  redirect("/login");
}
