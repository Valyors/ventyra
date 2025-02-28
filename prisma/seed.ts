// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Création des quiz existants
  const quiz1 = await prisma.quiz.upsert({
    where: { order: 1 },
    update: {},
    create: {
      title: "Sécurité des mots de passe",
      order: 1,
      status: "UNLOCKED",
      questions: {
        create: [
          {
            text: "Quelle est la meilleure manière de stocker ses mots de passe ?",
            answers: {
              create: [
                { text: "Sur un post-it collé à l’écran", isCorrect: false },
                { text: "Dans un fichier texte sur son ordinateur", isCorrect: false },
                { text: "Dans un gestionnaire de mots de passe sécurisé", isCorrect: true },
                { text: "En les mémorisant tous par cœur", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz2 = await prisma.quiz.upsert({
    where: { order: 2 },
    update: {},
    create: {
      title: "Détection du phishing",
      order: 2,
      status: "LOCKED",
      questions: {
        create: [
          {
            text: "Quelle est la caractéristique principale d’un email de phishing ?",
            answers: {
              create: [
                { text: "Il provient toujours d’une adresse inconnue", isCorrect: false },
                { text: "Il contient souvent un lien ou une pièce jointe suspecte", isCorrect: true },
                { text: "Il est toujours mal écrit avec des fautes de grammaire", isCorrect: false },
                { text: "Il utilise uniquement des menaces pour faire peur à la victime", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Ajout des nouveaux quiz
  const quiz3 = await prisma.quiz.upsert({
    where: { order: 3 },
    update: {},
    create: {
      title: "Confidentialité au travail et sécurité physique",
      order: 3,
      status: "LOCKED",
      questions: {
        create: [
          {
            text: "Quelle est une bonne pratique pour éviter les fuites d’informations confidentielles ?",
            answers: {
              create: [
                { text: "Partager les documents internes uniquement avec des collègues de confiance", isCorrect: false },
                { text: "Laisser les documents sensibles sur son bureau pour les consulter facilement", isCorrect: false },
                { text: "Ranger les documents confidentiels dans une armoire fermée à clé", isCorrect: true },
                { text: "Éviter d’imprimer des documents pour ne pas laisser de traces", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz4 = await prisma.quiz.upsert({
    where: { order: 4 },
    update: {},
    create: {
      title: "Risques liés au télétravail",
      order: 4,
      status: "LOCKED",
      questions: {
        create: [
          {
            text: "Quelle est la principale fonction d’un VPN ?",
            answers: {
              create: [
                { text: "Accélérer la vitesse d’internet", isCorrect: false },
                { text: "Bloquer toutes les connexions entrantes sur un appareil", isCorrect: false },
                { text: "Chiffrer la connexion internet et masquer l’adresse IP de l’utilisateur", isCorrect: true },
                { text: "Supprimer les virus sur un ordinateur", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz5 = await prisma.quiz.upsert({
    where: { order: 5 },
    update: {},
    create: {
      title: "Reconnaître et limiter une cyberattaque",
      order: 5,
      status: "LOCKED",
      questions: {
        create: [
          {
            text: "Quel est un signe potentiel qu’un ordinateur est infecté par un malware ?",
            answers: {
              create: [
                { text: "Il s’éteint immédiatement après l’ouverture d’un fichier", isCorrect: false },
                { text: "Il devient anormalement lent et affiche des comportements étranges", isCorrect: true },
                { text: "Il refuse d’ouvrir les fichiers Word uniquement", isCorrect: false },
                { text: "Il affiche un écran noir en permanence", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Quiz ajoutés avec succès.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
