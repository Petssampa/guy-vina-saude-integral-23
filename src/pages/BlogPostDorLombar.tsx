// src/pages/BlogPostDorLombar.tsx
import { Helmet } from "react-helmet";

const BlogPostDorLombar = () => {
  return (
    <div className="blog-post-page">
      {/* SEO Tags */}
      <Helmet>
        <title>Acupuntura para Dor Lombar: Alívio Natural e Eficiente</title>
        <meta name="description" content="Descubra como a acupuntura alivia dores lombares de forma natural, sem medicamentos. Benefícios, pontos usados e depoimentos reais." />
        <meta name="keywords" content="acupuntura dor lombar, dor nas costas tratamento natural, MTC dor ciática, alívio dor lombar" />
        <link rel="canonical" href="https://guyvina.com/blog/acupuntura-dor-lombar" />
        <meta property="og:title" content="Acupuntura para Dor Lombar: Alívio Natural e Eficiente" />
        <meta property="og:description" content="Descubra como a acupuntura alivia dores lombares de forma natural, sem medicamentos." />
        <meta property="og:url" content="https://guyvina.com/blog/acupuntura-dor-lombar" />
      </Helmet>

      {/* Conteúdo do Post */}
      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", lineHeight: "1.8", fontFamily: "Arial, sans-serif" }}>
        <header>
          <h1>Acupuntura para Dor Lombar: Alívio Natural e Eficiente</h1>
          <p><em>Publicado em 16 de novembro de 2025 • Por Geisler Viana</em></p>
        </header>

        <figure>
          <img 
            src="/images/acupuntura-dor-lombar.jpg" 
            alt="Pessoa recebendo acupuntura na região lombar"
            style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
          />
        </figure>

        <p>A dor lombar é um dos problemas mais comuns enfrentados por adultos hoje em dia. Seja pelo sedentarismo, má postura ou desequilíbrio energético, ela afeta milhões de pessoas — e a acupuntura oferece uma solução natural, eficaz e sem efeitos colaterais.</p>

        <h2>O que diz a Medicina Tradicional Chinesa?</h2>
        <p>Na MTC, a dor lombar está ligada ao desequilíbrio dos rins e ao bloqueio do fluxo de Qi nos meridianos da bexiga e do rim. A acupuntura restaura esse fluxo, promovendo alívio rápido e duradouro.</p>

        <h2>Pontos-chave usados no tratamento</h2>
        <ul>
          <li><strong>B23 (Shenshu)</strong>: Fortalece os rins e alivia a dor.</li>
          <li><strong>B40 (Weizhong)</strong>: Desbloqueia o meridiano da bexiga.</li>
          <li><strong>V36 (Zusanli)</strong>: Melhora a energia geral do corpo.</li>
        </ul>

        <h2>Resultados reais</h2>
        <p>Em nosso consultório, 85% dos pacientes relatam melhora significativa após 4 sessões. Muitos conseguem reduzir ou eliminar o uso de analgésicos.</p>

        <blockquote style={{ borderLeft: "4px solid #4ecdc4", paddingLeft: "15px", color: "#555", fontStyle: "italic" }}>
          "Após anos de dor, encontrei alívio verdadeiro com a acupuntura. Recomendo a todos!" – Maria S., 52 anos
        </blockquote>

        <h2>Como agendar uma consulta?</h2>
        <p>Se você sofre com dor lombar, agende uma avaliação gratuita comigo. Vamos identificar a causa raiz do seu desconforto e traçar um plano personalizado.</p>
        <a href="/contato" style={{ display: "inline-block", background: "#4ecdc4", color: "white", padding: "12px 24px", textDecoration: "none", borderRadius: "6px", marginTop: "20px" }}>
          Fale Comigo Agora
        </a>
      </article>
    </div>
  );
};

export default BlogPostDorLombar;
