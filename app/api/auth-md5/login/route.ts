// app/api/auth-md5/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Trouver l'utilisateur
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 401 });
    }

    // Hacher le mot de passe fourni pour le comparer avec celui stocké
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    if (hashedPassword !== user.password) {
      return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
    }

    // Créer un JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    console.log("🎫 JWT généré (login MD5) :", token);

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de la connexion." },
      { status: 500 }
    );
  }
}
