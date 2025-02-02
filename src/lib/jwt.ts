"use server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function generateToken(user: { id: string }) {
  const payload = { userId: user.id };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, JWT_SECRET, options);
}

export async function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
