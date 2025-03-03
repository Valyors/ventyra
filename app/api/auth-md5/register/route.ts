// app/api/auth-md5/register/route.ts

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Vérifier si l'email est déjà pris
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'Email déjà pris' }, { status: 400 });
    }

    // Hacher le mot de passe avec MD5
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    // Créer un nouvel utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Créer un JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    console.log("🎫 JWT généré (register MD5) :", token);

    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Une erreur s'est produite lors de l'inscription.",
      }),
      { status: 500 }
    );
  }
}
