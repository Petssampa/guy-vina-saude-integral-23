
import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  jsonLd?: object[];
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update title
    document.title = seoData.title;

    // Update or create meta description
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update or create meta property
    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update basic meta tags
    updateMeta('description', seoData.description);
    if (seoData.keywords) {
      updateMeta('keywords', seoData.keywords);
    }

    // Update Open Graph tags
    updateProperty('og:title', seoData.ogTitle || seoData.title);
    updateProperty('og:description', seoData.ogDescription || seoData.description);
    if (seoData.ogImage) {
      updateProperty('og:image', seoData.ogImage);
    }
    if (seoData.ogUrl) {
      updateProperty('og:url', seoData.ogUrl);
    }

    // Update canonical URL
    if (seoData.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = seoData.canonicalUrl;
    }

    // Add JSON-LD structured data
    if (seoData.jsonLd && seoData.jsonLd.length > 0) {
      // Remove existing JSON-LD scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Add new JSON-LD scripts
      seoData.jsonLd.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        script.id = `json-ld-${index}`;
        document.head.appendChild(script);
      });
    }

    return () => {
      // Reset to default title when component unmounts
      document.title = 'Guy Vina - Medicina Tradicional Chinesa | Acupuntura e Fitoterapia';
      
      // Clean up JSON-LD scripts
      const jsonLdScripts = document.querySelectorAll('script[id^="json-ld-"]');
      jsonLdScripts.forEach(script => script.remove());
    };
  }, [seoData]);
};
