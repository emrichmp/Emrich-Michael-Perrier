import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  section?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Emrich-Michael Perrier | Full Stack Engineer, Los Angeles",
  description = "Full stack engineer and Co-Founding CTO based in Los Angeles. 5+ years building SaaS products with React, Next.js, TypeScript, and Node.js. Top Rated Plus on Upwork, 100% job success score.",
  keywords = "Emrich-Michael Perrier, Emrich Perrier, Full Stack Engineer, Los Angeles Developer, React Developer, TypeScript Developer, Next.js Developer, Node.js Developer, Product Engineer, Web Developer Los Angeles, Upwork Developer, Top Rated Plus Developer, Freelance Developer Los Angeles",
  image = "/About/emrich.webp",
  url = "https://www.emrichperrier.com/",
  type = "website",
  section
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Update Open Graph tags
    updatePropertyTag("og:title", title);
    updatePropertyTag("og:description", description);
    updatePropertyTag("og:image", `${url}${image}`);
    updatePropertyTag("og:url", url);
    updatePropertyTag("og:type", type);

    // Update Twitter tags
    updatePropertyTag("twitter:title", title);
    updatePropertyTag("twitter:description", description);
    updatePropertyTag("twitter:image", `${url}${image}`);

    // Add section-specific structured data if provided
    if (section) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description: description,
        url: url,
        isPartOf: {
          "@type": "WebSite",
          name: "Emrich-Michael Perrier — Full Stack Engineer",
          url: "https://www.emrichperrier.com"
        },
        about: {
          "@type": "Person",
          name: "Emrich-Michael Perrier",
          jobTitle: "Full Stack Engineer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Los Angeles",
            addressRegion: "CA",
            addressCountry: "US"
          }
        }
      };

      // Remove existing section-specific structured data
      const existingScript = document.querySelector("script[data-seo-section]");
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-section", section);
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, keywords, image, url, type, section]);

  return null; // This component doesn't render anything
};

export default SEO;
