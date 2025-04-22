// app/components/ModulePageHead.tsx

import React from 'react';

interface ModulePageHeadProps {
  title: string;
  description: string;
  moduleName: string;
  duration: string;
}

// Fonction pour générer les métadonnées d'un module
const generateModuleMetadata = ({ 
  title, 
  description, 
  moduleName,
  duration
}: ModulePageHeadProps) => {
  // Créer un slug à partir du nom du module
  const slug = moduleName
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
    
  // Données structurées pour le module
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": moduleName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Ventyra",
      "sameAs": "https://ventyra.fr"
    },
    "timeRequired": duration,
    "educationalCredentialAwarded": "Certificat de formation en cybersécurité",
    "offers": {
      "@type": "Offer",
      "category": "Formation professionnelle",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  };

  return {
    title: title,
    description: description,
    keywords: `formation cybersécurité, ${moduleName.toLowerCase()}, sécurité informatique, ventyra, formation présentielle`,
    openGraph: {
      title: title,
      description: description,
      url: `https://ventyra.fr/modules/${slug}`,
      images: [{ url: '/ventyra-og-image.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/ventyra-twitter-image.jpg'],
    },
    other: {
      'structured-data': JSON.stringify(structuredData),
    },
  };
};

const ModulePageHead: React.FC<ModulePageHeadProps> = () => {
  // Ce composant ne rend rien visuellement
  // Il est destiné à être utilisé pour générer des métadonnées
  return null;
};

export default ModulePageHead;
export { generateModuleMetadata };
