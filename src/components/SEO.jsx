import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, type, image }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph tags (Facebook, Instagram, YouTube, LinkedIn, WhatsApp) */}
      <meta property="og:site_name" content="Flip Inverted Arts" />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
