// src/pages/BlogPostAcupunturaAnsiedade.tsx
import { Helmet } from "react-helmet";

const BlogPostAcupunturaAnsiedade = () => {
  return (
    <div className="blog-post-page">
      {/* SEO Tags */}
      <Helmet>
        <title>Acupuntura para Ansiedade: Alívio Natural e Eficaz | Guy Vina</title>
        <meta name="description" content="Descubra como a acupuntura pode aliviar sintomas de ansiedade de forma natural e eficaz, sem efeitos colaterais." />
        <meta name="keywords" content="acupuntura ansiedade, ansiedade tratamento natural, medicina chinesa, bem-estar emocional" />
        <link rel="canonical" href="https://guyvina.com/blog/acupuntura-ansiedade" />
        <meta property="og:title" content="Acupuntura para Ansiedade: Alívio Natural e Eficaz" />
        <meta property="og:description" content="Descubra como a acupuntura pode aliviar sintomas de ansiedade de forma natural e eficaz." />
        <meta property="og:url" content="https://guyvina.com/blog/acupuntura-ansiedade" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Conteúdo do Post */}
      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", lineHeight: "1.8", fontFamily: "Arial, sans-serif" }}>
        <header>
          <h1 style={{ color: "#1156A2", fontSize: "2.5rem", marginBottom: "10px" }}>
            Acupuntura para Ansiedade: Alívio Natural e Eficaz
          </h1>
          <p style={{ color: "#666", fontSize: "1rem" }}>
            Publicado em 17 de novembro de 2025 • Por Geisler Viana
          </p>
        </header>

        <figure style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>
          <img 
            src="/images/acupuntura-ansiedade.jpg" 
            alt="Pessoa recebendo acupuntura com tranquilidade"
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </figure>

        <p>
          A ansiedade afeta milhões de pessoas hoje. No ritmo acelerado da vida moderna,
          muitos buscam alívio rápido — mas nem sempre seguro.
        </p>

        <h2 style={{ color: "#1156A2", marginTop: "30px", marginBottom: "15px" }}>
          Como a Medicina Tradicional Chinesa entende a ansiedade?
        </h2>

        <p>
          Na MTC, a ansiedade está ligada ao desequilíbrio do coração e do fígado.
          A acupuntura restaura o fluxo de energia (Qi), promovendo calma e equilíbrio emocional.
        </p>

        <h3 style={{ color: "#1156A2", marginTop: "25px" }}>Pontos-chave usados no tratamento</h3>
        <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
          <li><strong>H7 (Shenmen)</strong>: Ponto do coração, promove tranquilidade.</li>
          <li><strong>LR3 (Taichong)</strong>: Ponto do fígado, alivia tensão emocional.</li>
          <li><strong>G20 (Baihui)</strong>: Ponto no topo da cabeça, acalma a mente.</li>
        </ul>

        <blockquote style={{
          borderLeft: "4px solid #4ecdc4",
          paddingLeft: "20px",
          fontStyle: "italic",
          color: "#555",
          marginTop: "30px",
          marginBottom: "30px"
        }}>
          "Após meses de sessões, me sinto mais leve e tranquila. Recomendo a todos!" – Ana S., 34 anos
        </blockquote>

        <p>
          Se você sofre com ansiedade, agende uma avaliação gratuita comigo.
          Vamos identificar a causa raiz do seu desconforto e traçar um plano personalizado.
        </p>

        <a
          href="/contato"
          style={{
            display: "inline-block",
            background: "#4ecdc4",
            color: "white",
            padding: "12px 24px",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            marginTop: "20px"
          }}
        >
          Fale Comigo Agora
        </a>
      </article>
    </div>
  );
};

export default BlogPostAcupunturaAnsiedade;
