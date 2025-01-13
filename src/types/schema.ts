import { z } from "zod";

export const signupSchema = z.object({
  fname: z
    .string()
    .nonempty({
      message: "First name is required.",
    })
    .min(2, {
      message: "First name must be at least 2 characters.",
    }),
  lname: z
    .string()
    .nonempty({
      message: "Last name is required.",
    })
    .min(2, {
      message: "Last name must be at least 2 characters.",
    }),
  email: z
    .string()
    .nonempty({
      message: "Email is required.",
    })
    .email({
      message: "Invalid email address.",
    }),
  password: z
    .string()
    .nonempty({
      message: "Password is required.",
    })
    .min(6, {
      message: "Password must be at least 6 characters.",
    }),
});

export const signinSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: "Email is required.",
    })
    .email({
      message: "Invalid email address.",
    }),
  password: z
    .string()
    .nonempty({
      message: "Password is required.",
    })
    .min(6, {
      message: "Password must be at least 6 characters.",
    }),
});
