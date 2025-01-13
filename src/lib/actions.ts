"use server";

import { hashPassword, verifyPassword } from "@/lib/hash";
import { generateToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { signinSchema, signupSchema } from "@/types/schema";
import { z } from "zod";

//auth actions
export async function handleSignup(values: z.infer<typeof signupSchema>) {
  const { fname, lname, email, password } = values;
  if (!email || !password || !fname || !lname) {
    throw new Error("Missing required fields (fname, lname, email, password).");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error(
      "A user with this email already exists. Please use a different email."
    );
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: { fname, lname, email, password: hashedPassword },
  });

  return { message: "Registered successfully.", user: newUser };
}
export async function handleSignin(values: z.infer<typeof signinSchema>) {
  const { email, password } = values;

  if (!email || !password) {
    throw new Error("Both email and new password are required.");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("No account found with the provided email address.");
  }

  const isPasswordValid = await verifyPassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials. Please try again.");
  }

  const token = await generateToken(user);

  return { message: "You are Login successfully.", token, user };
}
export async function handleForgotPassword(email: string, newPassword: string) {
  if (!email || !newPassword) {
    throw new Error("Both email and new password are required.");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("No account found with the provided email address.");
  }

  const hashedPassword = await hashPassword(newPassword);

  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });

  return { message: "Your password has been successfully updated." };
}
