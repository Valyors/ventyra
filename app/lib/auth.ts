// lib/auth.ts

import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!); // Assure-toi que JWT_SECRET est bien défini
  } catch (error) {
    console.error("Erreur verification token:", error);
    return null;
  }
}
