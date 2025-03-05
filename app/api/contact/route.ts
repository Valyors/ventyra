// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Récupération de la clé API depuis l'environnement
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error("La clé API RESEND_API_KEY n'est pas définie dans l'environnement");
}

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    // Extraction des données du body
    const { nom, prenom, email, message } = await request.json();

    // Vérification de la présence de tous les champs
    if (!nom || !prenom || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // Construction du contenu de l'email en HTML
    const emailData = {
      from: "ventyra@resend.dev", // expéditeur vérifié sur Resend
      to: ["ventyra.cyber@gmail.com", "contact@ventyra.fr"],  // destinataires
      subject: `Nouveau message de contact de ${prenom} ${nom}`,
      html: `<p>Vous avez reçu un nouveau message de ${prenom} ${nom} (${email}) :</p>
             <p>${message}</p>`,
    };

    // Envoi de l'email via Resend
    const result = await resend.emails.send(emailData);

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
