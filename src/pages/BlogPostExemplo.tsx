import { Helmet } from "react-helmet";

const BlogPostExemplo = () => {
  const postTitle = "Acupuntura para Ansiedade: Alívio Natural e Eficaz";
  const postDate = "16 de Novembro de 2025";
  const postAuthor = "Geisler Viana";
  const postDescription = "Descubra como a acupuntura pode ajudar a reduzir a ansiedade de forma natural e segura. Benefícios, pontos usados e depoimentos reais.";
  const postContent = `
    <p>A ansiedade é uma das queixas mais comuns nos dias de hoje. Com o ritmo acelerado da vida moderna, muitas pessoas buscam formas de alívio que sejam <strong>naturais e eficazes</strong>.</p>

    <h2>O que diz a Medicina Tradicional Chinesa?</h2>
    <p>Na MTC, a ansiedade está ligada ao desequilíbrio do coração e do fígado. A acupuntura restaura o fluxo de energia (Qi), promovendo calma e equilíbrio emocional.</p>

    <h2>Pontos-chave usados no tratamento</h2>
    <ul>
      <li><strong>H7 (Shenmen)</strong>: Ponto do coração, promove tranquilidade.</li>
      <li><strong>LR3 (Taichong)</strong>: Ponto do fígado, alivia tensão emocional.</li>
      <li><strong>G20 (Baihui)</strong>: Ponto no topo da cabeça, acalma a mente.</li>
    </ul>

    <h2>Depoimento real</h2>
    <blockquote style="border-left: 4px solid #4ecdc4; padding-left: 15px; color: #555; font-style: italic;">
      "Após meses de sessões, me sinto mais leve e tranquila. Recomendo a todos que sofrem com ansiedade." – Ana S., 34 anos
    </blockquote>

    <h2>Como agendar uma consulta?</h2>
    <p>Se você sofre com ansiedade, agende uma avaliação gratuita comigo. Vamos identificar a causa raiz do seu desequilíbrio e traçar um plano personalizado.</p>
    <a href="/contato" style="display: inline-block; background: #4ecdc4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px;">
      Fale Comigo Agora
    </a>
  `;

  return (
    <div className="blog-post-page">
      {/* SEO Tags */}
      <Helmet>
        <title>{postTitle}</title>
        <meta name="description" content={postDescription} />
        <meta name="keywords" content="acupuntura ansiedade, ansiedade tratamento natural, MTC ansiedade, alívio ansiedade" />
        <link rel="canonical" href="https://guyvina.com/blog/acupuntura-ansiedade" />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:url" content="https://guyvina.com/blog/acupuntura-ansiedade" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Conteúdo do Post */}
      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", lineHeight: "1.8", fontFamily: "Arial, sans-serif" }}>
        <header>
          <h1>{postTitle}</h1>
          <p><em>Publicado em {postDate} • Por {postAuthor}</em></p>
        </header>

        <div dangerouslySetInnerHTML={{ __html: postContent }} />
      </article>
    </div>
  );
};

export default BlogPostExemplo;
