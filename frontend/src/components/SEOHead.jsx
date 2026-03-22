import React from 'react';

export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Patil",
    "jobTitle": "Full Stack Developer",
    "description": "Building scalable, high-performance web applications for real-world impact. 3.6+ years of experience developing enterprise-grade systems serving 10K+ daily users.",
    "url": "https://nikhilpatil.dev",
    "email": "contact@nikhilpatil.dev",
    "sameAs": [
      "https://github.com/nikhilpatil-Eng",
      "https://linkedin.com/in/nikhil-patil-b47a56217",
      "https://x.com/patil_nikhil__"
    ],
    "knowsAbout": [
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "AWS",
      "Microservices",
      "REST APIs",
      "TypeScript",
      "Docker",
      "JavaScript"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Full Stack Development",
        "description": "Enterprise-grade web application development, API design, and system architecture"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Dynamisch IT Ltd",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressCountry": "India"
      }
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Savitribai Phule Pune University",
        "description": "Master of Computer Applications (MCA)"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "North Maharashtra University",
        "description": "Bachelor of Computer Applications (BCA)"
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nikhilpatil.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://nikhilpatil.dev#projects"
      }
    ]
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* SEO Meta Tags */}
      <title>Nikhil Patil - Full Stack Developer | React, Node.js, AWS</title>
      <meta name="description" content="Full Stack Developer with 3.6+ years building scalable web applications. Expert in React, Node.js, MongoDB, AWS, and microservices architecture." />
      <meta name="keywords" content="Full Stack Developer, React, Node.js, MongoDB, AWS, Microservices, REST APIs, TypeScript, Docker, Web Development, Pune, India" />
      <meta name="author" content="Nikhil Patil" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nikhilpatil.dev" />
      <meta property="og:title" content="Nikhil Patil - Full Stack Developer" />
      <meta property="og:description" content="Building scalable, high-performance web applications for real-world impact. Expert in React, Node.js, AWS, and microservices." />
      <meta property="og:image" content="https://nikhilpatil.dev/images/og-image.png" />
      <meta property="og:site_name" content="Nikhil Patil Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://nikhilpatil.dev" />
      <meta name="twitter:title" content="Nikhil Patil - Full Stack Developer" />
      <meta name="twitter:description" content="Building scalable, high-performance web applications for real-world impact." />
      <meta name="twitter:image" content="https://nikhilpatil.dev/images/twitter-image.png" />
      <meta name="twitter:creator" content="@patil_nikhil__" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="application-name" content="Nikhil Patil Portfolio" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://nikhilpatil.dev" />
      
      {/* Structured Data - Person */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Structured Data - Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      
      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Nikhil Patil Portfolio",
          "url": "https://nikhilpatil.dev",
          "description": "Full Stack Developer portfolio showcasing projects, skills, and experience",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://nikhilpatil.dev/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Nikhil Patil - Full Stack Developer",
          "url": "https://nikhilpatil.dev",
          "logo": "https://nikhilpatil.dev/images/logo.png",
          "description": "Professional full stack development services",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "professional services",
            "email": "contact@nikhilpatil.dev",
            "availableLanguage": ["English"]
          }
        })}
      </script>
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//x.com" />
    </>
  );
}
