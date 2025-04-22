// app/components/ModulePageHead.tsx

import React from 'react';
import Head from 'next/head';

interface ModulePageHeadProps {
  title: string;
  description: string;
  moduleName: string;
  duration: string;
}

const ModulePageHead: React.FC<ModulePageHeadProps> = ({ 
  title, 
  description, 
  moduleName,
  duration
}) => {
  // Créer un slug à partir du nom du module
  const slug = moduleName
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`formation cybersécurité, ${moduleName.toLowerCase()}, sécurité informatique, ventyra`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://ventyra.fr/modules/${slug}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/ventyra-og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://ventyra.fr/modules/${slug}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/ventyra-twitter-image.jpg" />
      
      {/* Schema.org markup pour ce module spécifique */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />
    </>
  );
};

export default ModulePageHead;
