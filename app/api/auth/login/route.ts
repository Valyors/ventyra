// app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma'; // ta connexion Prisma

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Trouver l'utilisateur
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 401 }
      );
    }

    // Vérifier le mot de passe
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Mot de passe incorrect' },
        { status: 401 }
      );
    }

    // Créer un JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    console.log("🎫 JWT généré (login) :", token); // ✅ Vérification

    return NextResponse.json({ token }, { status: 200 });

  } catch {
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de la connexion." },
      { status: 500 }
    );
  }
}
