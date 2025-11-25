import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';

const Blog = () => {
  useSEO({
    title: "Blog Medicina Chinesa | Dicas de Bem-estar e Saúde Natural",
    description: "Artigos sobre Medicina Tradicional Chinesa, acupuntura, fitoterapia e dicas para uma vida mais saudável e equilibrada.",
    keywords: "blog medicina chinesa, artigos acupuntura, fitoterapia, bem-estar, saúde natural, dicas mtc",
    canonicalUrl: "https://guyvina.com/blog-medicina-chinesa",
    ogTitle: "Blog Medicina Chinesa | Dicas de Bem-estar e Saúde Natural",
    ogDescription: "Artigos sobre Medicina Tradicional Chinesa, acupuntura, fitoterapia e dicas para uma vida mais saudável e equilibrada.",
    ogUrl: "https://guyvina.com/blog-medicina-chinesa"
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/lovable-uploads/c454a67b-d31d-4c4e-bb80-312ce79c8d7b.png')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-200">
              Nosso blog tem posts sobre Medicina Chinesa e cultura!
            </p>
          </div>
        </div>
      </section>

      {/* ✅ NOVO LAYOUT: Caixa Principal + 6 Caixas Menores (3 atuais + 3 novas) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Artigos Recentes</h2>

            {/* Caixa Principal */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-center border border-gray-200">
              <img 
                src="/lovable-uploads/acupuntura-destaque.jpg"
                alt="Acupuntura para Ansiedade" 
                className="w-full md:w-2/5 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-deep-blue">Acupuntura para Ansiedade</h3>
                <p className="text-gray-600 mt-3">
                  Alívio natural e eficaz com técnicas milenares da Medicina Chinesa.
                </p>
                <a href="/blog/acupuntura-ansiedade" className="text-deep-blue font-semibold mt-4 inline-block">
                  Ler artigo completo →
                </a>
              </div>
            </div>

            {/* ✅ PRIMEIRO BLOCO: 3 Caixas Atuais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              {/* Caixa 2: Dor Lombar */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/acupuntura-dor-lombar.jpg" 
                  alt="Acupuntura para Dor Lombar" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-bold text-deep-blue mt-4">Acupuntura para Dor Lombar</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Tratamento eficaz e natural para alívio da dor.
                </p>
                <a href="/blog/acupuntura-dor-lombar" className="text-deep-blue text-sm font-medium mt-3 inline-block">
                  Ler mais →
                </a>
              </div>

              {/* Caixa 3: Saúde Emocional */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/saude-emocional.jpg" 
                  alt="Saúde Emocional e Acupuntura" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-bold text-deep-blue mt-4">Saúde Emocional</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Equilíbrio mental com práticas milenares.
                </p>
                <a href="#" className="text-deep-blue text-sm font-medium mt-3 inline-block">
                  Ler mais →
                </a>
              </div>

              {/* Caixa 4: Nutrição Chinesa */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/nutricao-chinesa.jpg" 
                  alt="Nutrição na Medicina Chinesa" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-bold text-deep-blue mt-4">Nutrição Chinesa</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Alimentação equilibrada segundo a sabedoria milenar.
                </p>
                <a href="#" className="text-deep-blue text-sm font-medium mt-3 inline-block">
                  Ler mais →
                </a>
              </div>
            </div>

            {/* ✅ SEGUNDO BLOCO: 3 Novas Caixas (para futuros posts) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Caixa 5: Qigong — Guia Definitivo */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/praticando-qigong-em-um-ambiente-natural.jpg" 
                  alt="Qigong: Cultivando Energia Vital, Saúde e Bem-Estar"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-bold text-deep-blue mt-4">Qigong: Guia Definitivo</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aprenda a cultivar energia vital, equilíbrio emocional e saúde com práticas milenares.
                </p>
                <a href="/qigong-guia-definitivo" className="text-deep-blue text-sm font-medium mt-3 inline-block">
                  Ler mais →
                </a>
              </div>

              {/* Caixa 6: Futuro Post 2 */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Em breve</span>
                </div>
                <h3 className="font-bold text-deep-blue mt-4">Novo Post em Breve</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Conteúdo novo chegando em breve.
                </p>
                <a href="#" className="text-gray-400 text-sm font-medium mt-3 inline-block cursor-not-allowed">
                  Indisponível
                </a>
              </div>

              {/* Caixa 7: Futuro Post 3 */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Em breve</span>
                </div>
                <h3 className="font-bold text-deep-blue mt-4">Novo Post em Breve</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Conteúdo novo chegando em breve.
                </p>
                <a href="#" className="text-gray-400 text-sm font-medium mt-3 inline-block cursor-not-allowed">
                  Indisponível
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Newsletter (abaixo das caixas) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-deep-blue">
              Mantenha-se Atualizado
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Receba nossos artigos mais recentes sobre Medicina Tradicional Chinesa diretamente em seu e-mail.
            </p>
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"
              />
              <Button className="bg-deep-blue hover:bg-blue-800 text-white px-8 py-3">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
