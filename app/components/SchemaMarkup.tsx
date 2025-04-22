// app/components/SchemaMarkup.tsx

import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ventyra",
    "description": "Formation certifiée Qualiopi en cybersécurité pour sensibiliser vos collaborateurs aux risques cyber. 7 modules pratiques pour réduire les menaces informatiques.",
    "url": "https://ventyra.fr",
    "logo": "https://ventyra.fr/ventyra-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/ventyra",
      // Ajoutez ici vos autres profils sociaux
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
      // Complétez avec votre adresse si vous souhaitez qu'elle soit publique
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Formations en cybersécurité",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Introduction aux risques cyber",
          "description": "Module de formation sur les fondamentaux des risques cyber",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT35M"
        },
        {
          "@type": "Course",
          "name": "OSINT, données et vie privée",
          "description": "Module de formation sur l'OSINT et la protection des données personnelles",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT50M"
        },
        {
          "@type": "Course",
          "name": "Gestion des mots de passe",
          "description": "Module de formation sur la gestion sécurisée des mots de passe",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT1H35M"
        },
        {
          "@type": "Course",
          "name": "Phishing & ingénierie sociale",
          "description": "Module de formation sur la détection et prévention du phishing",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT1H35M"
        },
        {
          "@type": "Course",
          "name": "Sécurité physique",
          "description": "Module de formation sur la sécurité physique des systèmes d'information",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT50M"
        },
        {
          "@type": "Course",
          "name": "Sécurité à distance & télétravail",
          "description": "Module de formation sur la sécurité en situation de télétravail",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT45M"
        },
        {
          "@type": "Course",
          "name": "Comment réagir en cas d'attaque",
          "description": "Module de formation sur la réponse aux incidents de sécurité",
          "provider": {
            "@type": "Organization",
            "name": "Ventyra"
          },
          "timeRequired": "PT50M"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
