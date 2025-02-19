// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Création du premier quiz
  const quiz1 = await prisma.quiz.upsert({
    where: { order: 1 }, // Correction ici, on utilise `order` comme clé unique
    update: {},
    create: {
      title: "Sécurité des mots de passe",
      order: 1,
      status: "UNLOCKED", // Le premier quiz est débloqué par défaut
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
          {
            text: "Pourquoi un gestionnaire de mots de passe améliore-t-il la sécurité ?",
            answers: {
              create: [
                { text: "Il génère des mots de passe uniques et complexes pour chaque site", isCorrect: true },
                { text: "Il empêche les attaques par phishing", isCorrect: false },
                { text: "Il bloque les connexions non sécurisées", isCorrect: false },
                { text: "Il élimine totalement le besoin de mots de passe", isCorrect: false },
              ],
            },
          },
          {
            text: "Pourquoi l’authentification à deux facteurs (2FA) est-elle efficace contre le vol de mot de passe ?",
            answers: {
              create: [
                { text: "Elle empêche totalement les attaques de hackers", isCorrect: false },
                { text: "Elle force l’utilisateur à changer régulièrement son mot de passe", isCorrect: false },
                { text: "Même si un attaquant vole un mot de passe, il lui manque encore un second facteur d’authentification", isCorrect: true },
                { text: "Elle fonctionne uniquement sur les sites sécurisés en HTTPS", isCorrect: false },
              ],
            },
          },
          {
            text: "Quel est un bon mot de passe selon les bonnes pratiques de sécurité ?",
            answers: {
              create: [
                { text: '"motdepasse123"', isCorrect: false },
                { text: '"JeanDupont1975"', isCorrect: false },
                { text: '"t8!K$9vPz&3mQ"', isCorrect: true },
                { text: '"soleil"', isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Création du deuxième quiz
  const quiz2 = await prisma.quiz.upsert({
    where: { order: 2 },
    update: {},
    create: {
      title: "Détection du phishing",
      order: 2,
      status: "LOCKED", // Le quiz est verrouillé au départ
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
          {
            text: "Quel est le principal objectif d’une attaque de phishing ?",
            answers: {
              create: [
                { text: "Faire planter l’ordinateur de la victime", isCorrect: false },
                { text: "Récupérer des informations sensibles ou financières", isCorrect: true },
                { text: "Envoyer des publicités aux victimes", isCorrect: false },
                { text: "Installer automatiquement un antivirus sur l’appareil de la victime", isCorrect: false },
              ],
            },
          },
          {
            text: "Quel est le meilleur moyen de se protéger contre le phishing ?",
            answers: {
              create: [
                { text: "Ne jamais utiliser Internet", isCorrect: false },
                { text: "Mettre un mot de passe très long sur ses comptes", isCorrect: false },
                { text: "Vérifier l’expéditeur, les liens et ne jamais partager ses informations sensibles par email", isCorrect: true },
                { text: "Installer uniquement un antivirus et ne pas se soucier des emails reçus", isCorrect: false },
              ],
            },
          },
          {
            text: "En entreprise, quel réflexe adopter face à un email demandant des informations confidentielles ?",
            answers: {
              create: [
                { text: "Répondre rapidement pour montrer son efficacité", isCorrect: false },
                { text: "Vérifier l’authenticité de la demande auprès de l’expéditeur par un autre moyen", isCorrect: true },
                { text: "Transférer l’email à tous ses collègues pour avoir leur avis", isCorrect: false },
                { text: "Ouvrir les pièces jointes pour voir si elles sont légitimes", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(`Quiz ajouté : ${quiz1.title} & ${quiz2.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
