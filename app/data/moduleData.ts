export const moduleData = [
  {
    id: 1,
    title: "Module 1 : Introduction aux risques cyber",
    description:
      "Découvrez les bases de la cybersécurité et pourquoi elle est essentielle dans notre monde connecté.",
    image: "/module1.png",
    content: {
      duration: "35 MIN",
      objectives: [
        "Comprendre les principales menaces en cybersécurité.",
        "Identifier les coûts visibles et cachés d'une cyberattaque.",
        "Se sensibiliser aux enjeux de la cybersécurité en entreprise et au quotidien."
      ],
      schedule: [
        {
          title: "Présentation des risques cyber",
          duration: "15 min",
          details: [
            "Panorama des cyber menaces actuelles.",
            "Iceberg des coûts d'une cyberattaque (coûts visibles et cachés)."
          ]
        },
        {
          title: "Études de cas concrets",
          duration: "15 min",
          details: [
            "Analyse d'attaques récentes et de leurs impacts.",
            "Discussion interactive avec les participants."
          ]
        }
      ],
      evaluation: "Quiz interactif en fin de module – 5 min"
    }
  },
  {
    id: 2,
    title: "Module 2 : OSINT, données et vie privée",
    description:
      "Contrôlez votre présence en ligne : faites attention à ce que vous publiez et supprimez les informations sensibles.",
    image: "/module2.png",
    content: {
      duration: "50 MIN",
      objectives: [
        "Comprendre ce qu'est l'Open-Source Intelligence (OSINT).",
        "Identifier les informations accessibles publiquement et les risques associés.",
        "Découvrir les bonnes pratiques pour protéger ses données personnelles."
      ],
      schedule: [
        {
          title: "Introduction à l'OSINT et collecte de données publiques",
          duration: "15 min",
          details: [
            "Définition et enjeux de l'OSINT.",
            "Démonstration en direct d'une recherche OSINT."
          ]
        },
        {
          title: "Protection des données personnelles et cadre légal (RGPD)",
          duration: "15 min",
          details: [
            "Loi et réglementation en vigueur sur la protection des données.",
            "Présentation des droits des citoyens et des obligations des entreprises."
          ]
        },
        {
          title: "Atelier pratique : Recherche OSINT sur un cas réel",
          duration: "15 min",
          details: [
            "Simulation de collecte d'informations publiques.",
            "Discussion sur les résultats et leur exploitation potentielle."
          ]
        }
      ],
      evaluation: "Quiz d'évaluation sur l'OSINT et le RGPD – 5 min"
    }
  },
  {
    id: 3,
    title: "Module 3 : Gestion des mots de passe",
    description:
      "Présentation des bonnes pratiques pour sécuriser les mots de passe : complexité, gestionnaires, authentification multi-facteurs et risques associés.",
    image: "/module3.png",
    content: {
      duration: "1H35",
      objectives: [
        "Comprendre l'importance d'un mot de passe sécurisé.",
        "Identifier les techniques d'attaque sur les mots de passe.",
        "Adopter les bonnes pratiques pour sécuriser ses accès."
      ],
      schedule: [
        {
          title: "Les faiblesses des mots de passe",
          duration: "15 min",
          details: [
            "Statistiques et analyse des erreurs courantes.",
            "Démonstration d'un hack de mot de passe en direct."
          ]
        },
        {
          title: "Qu'est-ce qu'un bon mot de passe ?",
          duration: "15 min",
          details: [
            "Critères d'un mot de passe robuste.",
            "Comparaison des différentes stratégies de création de mots de passe."
          ]
        },
        {
          title: "Outils et solutions pour sécuriser ses mots de passe",
          duration: "30 min",
          details: [
            "Gestionnaires de mots de passe : comment les utiliser efficacement ?",
            "Authentification multi-facteurs (2FA) : démonstration et mise en place.",
            "Vérification des fuites de mots de passe (ex. : Have I Been Pwned ?)."
          ]
        },
        {
          title: "Atelier pratique : Implémentation d'un gestionnaire de mots de passe",
          duration: "30 min",
          details: [
            "Installation et configuration d'un gestionnaire.",
            "Création et sécurisation d'un coffre-fort numérique."
          ]
        }
      ],
      evaluation: "Quiz d'évaluation sur la sécurité des mots de passe – 5 min"
    }
  },
  {
    id: 4,
    title: "Module 4 : Phishing & ingénierie sociale",
    description: "Techniques pour identifier et éviter les tentatives de phishing, en reconnaissant les signaux d'alerte et en adoptant les bons réflexes.",
    image: "/module4.png",
    content: {
      duration: "1H35",
      objectives: [
        "Comprendre les techniques utilisées par les cybercriminels pour manipuler les victimes.",
        "Identifier les signes d'une tentative de phishing (emails, SMS, appels, etc.).",
        "Savoir comment réagir face à une tentative d'hameçonnage."
      ],
      schedule: [
        {
          title: "Introduction à l'ingénierie sociale",
          duration: "15 min",
          details: [
            "Définition et principes clés.",
            "Pourquoi l'humain est la principale faille en cybersécurité ?"
          ]
        },
        {
          title: "Techniques de phishing et leurs impacts",
          duration: "20 min",
          details: [
            "Analyse des principales techniques utilisées (emails frauduleux, faux sites, usurpation d'identité, usurpation de l'empreinte bancaire).",
            "Étude de cas : décryptage d'attaques réelles."
          ]
        },
        {
          title: "Démonstration en direct d'une attaque de phishing",
          duration: "20 min",
          details: [
            "Création d'un faux email et analyse des éléments trompeurs.",
            "Identification des indices permettant de repérer une tentative d'hameçonnage."
          ]
        },
        {
          title: "Atelier pratique : Simulation de phishing",
          duration: "20 min",
          details: [
            "Par groupes de 2 ou 3 : analyse et détection d'emails frauduleux.",
            "Discussion collective sur les erreurs courantes et les bonnes pratiques."
          ]
        },
        {
          title: "Comment se protéger contre le phishing ?",
          duration: "15 min",
          details: [
            "Vérification des sources et des liens.",
            "Outils et extensions pour bloquer les tentatives d'hameçonnage.",
            "Mesures à mettre en place en entreprise pour sensibiliser les collaborateurs."
          ]
        }
      ],
      evaluation: "Test de reconnaissance d'emails et messages frauduleux – 5 min"
    }
  },
  {
    id: 5,
    title: "Module 5 : Sécurité physique",
    description: "Bonnes pratiques pour protéger les informations sensibles et sécuriser l'accès physique aux espaces de travail.",
    image: "/module5.png",
    content: {
      duration: "50 MIN",
      objectives: [
        "Comprendre l'importance de la sécurité physique dans la protection des données.",
        "Identifier les risques liés aux accès non autorisés.",
        "Connaître les bonnes pratiques pour sécuriser les équipements et locaux professionnels."
      ],
      schedule: [
        {
          title: "Introduction à la sécurité physique",
          duration: "10 min",
          details: [
            "Définition et enjeux.",
            "Exemples concrets d'attaques exploitant des failles physiques."
          ]
        },
        {
          title: "Démonstration d'attaques physiques",
          duration: "20 min",
          details: [
            "Clé USB piégée : comment un simple périphérique peut compromettre un système.",
            "Câble de charge modifié (USB Ninja) : espionnage et prise de contrôle à distance.",
            "Badges NFC et serrures électroniques : vulnérabilités et contournement."
          ]
        },
        {
          title: "Bonnes pratiques et prévention",
          duration: "10 min",
          details: [
            "Sécurisation des postes de travail (verrouillage automatique, sessions sécurisées).",
            "Gestion des accès aux bâtiments et aux espaces sensibles.",
            "Politique de « clean desk » et protection des documents sensibles."
          ]
        },
        {
          title: "Échanges et questions",
          duration: "5 min",
          details: []
        }
      ],
      evaluation: "Étude de cas : analyse d'un scénario d'attaque physique – 5 min"
    }
  },
  {
    id: 6,
    title: "Module 6 : Sécurité à distance & télétravail",
    description: "Mesures de sécurité pour protéger les accès à distance : VPN, authentification renforcée et bonnes pratiques en télétravail.",
    image: "/module6.png",
    content: {
      duration: "45 MIN",
      objectives: [
        "Comprendre les risques liés au travail à distance.",
        "Identifier les menaces spécifiques aux connexions et outils collaboratifs.",
        "Appliquer les bonnes pratiques pour sécuriser son environnement numérique en télétravail."
      ],
      schedule: [
        {
          title: "Introduction aux risques du télétravail",
          duration: "10 min",
          details: [
            "Augmentation des cyberattaques ciblant le travail à distance.",
            "Exemples concrets de failles exploitées par les hackers."
          ]
        },
        {
          title: "Démonstration des risques des Wi-Fi publics et réseaux frauduleux",
          duration: "15 min",
          details: [
            "Comment un pirate peut intercepter des données sur un Wi-Fi non sécurisé.",
            "Présentation d'attaques type Man-in-the-Middle (interception de communication).",
            "Solutions pour se protéger : VPN, connexions sécurisées, bonnes pratiques."
          ]
        },
        {
          title: "Sécurisation des outils collaboratifs et des connexions",
          duration: "15 min",
          details: [
            "Configuration sécurisée des logiciels de visioconférence, partage de fichiers et messageries.",
            "Gestion des droits et des accès aux ressources en ligne.",
            "Protection des appareils professionnels et personnels (mise à jour, chiffrement)."
          ]
        }
      ],
      evaluation: "Quiz sur les bonnes pratiques en télétravail – 5 min"
    }
  },
  {
    id: 7,
    title: "Module 7 : Comment réagir en cas d'attaque ?",
    description: "Méthodes pour détecter une cyberattaque et actions à entreprendre pour en limiter les impacts.",
    image: "/module7.png",
    content: {
      duration: "50 MIN",
      objectives: [
        "Connaître les réflexes à adopter face à une cyberattaque.",
        "Comprendre l'importance du signalement et de la gestion d'incidents.",
        "Identifier les interlocuteurs et services compétents en cas d'incident."
      ],
      schedule: [
        {
          title: "Identification des signes d'une cyberattaque",
          duration: "10 min",
          details: [
            "Comportements suspects sur un ordinateur ou un réseau.",
            "Exemples concrets d'attaques (rançongiciels, vol de données, compromission de compte)."
          ]
        },
        {
          title: "Procédures immédiates en cas d'attaque",
          duration: "15 min",
          details: [
            "Mesures d'urgence : isoler l'appareil, changer les mots de passe, prévenir les responsables.",
            "Qui contacter ? (RSSI, DSI, ANSSI, cybermalveillance.gouv.fr).",
            "Exemple d'un plan de réponse aux incidents en entreprise."
          ]
        },
        {
          title: "Exercice pratique : simulation d'attaque",
          duration: "15 min",
          details: [
            "Mise en situation : une attaque est détectée, quelles sont les étapes à suivre ?",
            "Travail en petits groupes pour analyser et répondre à une attaque simulée."
          ]
        },
        {
          title: "Échanges et questions",
          duration: "5 min",
          details: []
        }
      ],
      evaluation: "Quiz sur les bonnes pratiques de réaction face à une cyberattaque – 5 min"
    }
  }
];
