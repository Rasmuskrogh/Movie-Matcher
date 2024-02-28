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

  console.log("Password is correct!");

  revalidatePath("/");
  redirect("/");
}

export async function posters(i: number) {
  const allPosters = await sql`
  SELECT poster FROM hardcoded_movies`;
  return allPosters.rows[i].poster;
}

export async function allPosters() {
  const allPosters = await sql`
  SELECT COUNT(*) FROM hardcoded_movies`;
  return allPosters.rows[0].count;
}

export async function titles(i: number) {
  const allTitles = await sql`
  SELECT title FROM hardcoded_movies`;
  return allTitles.rows[i].title;
}

export async function years(i: number) {
  const allYears = await sql`
  SELECT year FROM hardcoded_movies`;
  return allYears.rows[i].year;
}

export async function runtimes(i: number) {
  const allRuntimes = await sql`
  SELECT runtime FROM hardcoded_movies`;
  return allRuntimes.rows[i].runtime;
}

export async function genres(i: number) {
  const allGenres = await sql`
  SELECT Genre FROM hardcoded_movies`;
  return allGenres.rows[i].genre;
}

export async function plots(i: number) {
  const allPlots = await sql`
  SELECT plot FROM hardcoded_movies`;
  return allPlots.rows[i].plot;
}

export async function directors(i: number) {
  const allDirectors = await sql`
  SELECT director FROM hardcoded_movies`;
  return allDirectors.rows[i].director;
}

export async function writers(i: number) {
  const allWriters = await sql`
  SELECT writer FROM hardcoded_movies`;
  return allWriters.rows[i].writer;
}

export async function actors(i: number) {
  const allActors = await sql`
  SELECT actors FROM hardcoded_movies`;
  return allActors.rows[i].actors;
}

export async function imdbRatings(i: number) {
  const allImdbRatings = await sql`
  SELECT imdbrating FROM hardcoded_movies`;
  return allImdbRatings.rows[i].imdbrating;
}

export async function rottenTomatoesRatings(i: number) {
  const allRottenTomatoesRatings = await sql`
  SELECT rottentomatoesrating FROM hardcoded_movies`;
  return allRottenTomatoesRatings.rows[i].rottentomatoesrating;
}

export async function metaCriticRatings(i: number) {
  const allMetaCriticRatings = await sql`
  SELECT metascriticrating FROM hardcoded_movies`;
  return allMetaCriticRatings.rows[i].metascriticrating;
}

// export async function addToLiked() {}
// export async function addToDisliked() {}
