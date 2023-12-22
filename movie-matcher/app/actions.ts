"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FormSchema } from "./schemas";

/* .refine((data) => data.password === data.confirmPassword, {
      message: "Password doesn't match",
      path: ["confirmPassword"],
    }); */

const CreateAccount = FormSchema.omit({ id: true, confirmPassword: true });

export async function createAccount(formData: FormData) {
  /*   const { firstName, lastName, username, email, password } = FormSchema.parse({
   */
  const { confirmPassword, ...dbFields } = FormSchema.parse({
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
