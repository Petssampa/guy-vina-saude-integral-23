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

      {/* Seus posts criados por você */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Artigos Recentes</h2>
            
            {/* Post 1: Ansiedade */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-deep-blue">Acupuntura para Ansiedade</h3>
              <p className="text-gray-600 mt-2">Alívio natural e eficaz com técnicas milenares da Medicina Chinesa.</p>
              <a href="/blog/acupuntura-ansiedade" className="text-deep-blue hover:text-blue-800 font-semibold mt-2 inline-block">
                Ler artigo completo →
              </a>
            </div>

            {/* Post 2: Dor Lombar */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-deep-blue">Acupuntura para Dor Lombar</h3>
              <p className="text-gray-600 mt-2">Alívio natural e eficaz com técnicas milenares da Medicina Chinesa.</p>
              <a href="/blog/acupuntura-dor-lombar" className="text-deep-blue hover:text-blue-800 font-semibold mt-2 inline-block">
                Ler artigo completo →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-50">
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
