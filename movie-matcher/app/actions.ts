"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FormSchema } from "./schemas";
import { v4 as uuidv4 } from "uuid";
import { baseSchema } from "./schemas";

const bcrypt = require("bcrypt");
const saltRounds = 13;

/* .refine((data) => data.password === data.confirmPassword, {
      message: "Password doesn't match",
      path: ["confirmPassword"],
    }); */

const CreateAccount = FormSchema.omit({
  id: true,
  firstName: true,
  lastName: true,
});

export async function createAccount(formData: FormData) {
  const { id, firstName, lastName, username, email, password } =
    FormSchema.parse({
      //const { /*  confirmPassword,  */ ...dbFields } = FormSchema.parse({
      id: uuidv4(),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      //confirmPassword: formData.get("confirmPassword"),
    });

  //const dbPassword = password;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await sql`
      INSERT INTO accounts (ID, Firstname, Lastname, Username, Email, Password)
      VALUES (${id}, ${firstName},${lastName},${username},${email},${hashedPassword})
      `;

  revalidatePath("/login");
  redirect("/login");
}

export async function loginAccount(formData: FormData) {
  const { username, password } = baseSchema.parse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  const SQLPassword =
    await sql`SELECT password FROM accounts WHERE username = ${username}`;
  const isValid = await bcrypt.compare(password, SQLPassword.rows[0].password);

  if (!isValid) {
    console.log("Wrong password");
    return;
  }

  console.log("Password is correctus!");

  revalidatePath("/");
  redirect("/");
}

export async function addToLiked() {
  
}
export async function addToDisliked() {}
