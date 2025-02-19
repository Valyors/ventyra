// app/api/auth/register/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma'; // ta connexion Prisma

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Vérifier si l'email est déjà pris
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'Email déjà pris' }, { status: 400 });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Créer un nouvel utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Créer un JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    console.log("🎫 JWT généré (register) :", token); // ✅ Vérification

    return NextResponse.json({ token }, { status: 201 });

  } catch {
    return new Response(
      JSON.stringify({
        error: "Une erreur s'est produite lors de l'inscription.",
      }),
      { status: 500 }
    );
  }
}
