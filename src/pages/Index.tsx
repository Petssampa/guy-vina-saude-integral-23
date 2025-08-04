import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LazyImage from '@/components/LazyImage';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  // SEO otimizado para a página inicial com Schema Markup
  useSEO({
    title: "Terapia Tradicional Chinesa | Qi Gong | Geisler Viana - São Paulo",
    description: "Transforme sua saúde com Qi Gong e terapias chinesas milenares. Geisler Viana, especialista em Medicina Tradicional Chinesa em São Paulo. Agende consulta.",
    keywords: "medicina tradicional chinesa, qi gong, tuina, acupuntura, geisler viana, terapia chinesa são paulo",
    canonicalUrl: "https://guyvina.com/",
    ogTitle: "Terapia Tradicional Chinesa | Qi Gong | Geisler Viana - São Paulo",
    ogDescription: "Transforme sua saúde com Qi Gong e terapias chinesas milenares. Geisler Viana, especialista em Medicina Tradicional Chinesa em São Paulo. Agende consulta.",
    ogImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&h=630&auto=format&fit=crop&crop=face",
    ogUrl: "https://guyvina.com/",
    jsonLd: [
      // LocalBusiness & MedicalBusiness
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Geisler Viana - Medicina Tradicional Chinesa",
        "alternateName": "Guy Vina",
        "description": "Especialista em Medicina Tradicional Chinesa oferecendo Qi Gong, Tuina, Acupuntura e terapias chinesas milenares em São Paulo",
        "url": "https://guyvina.com",
        "telephone": "+55-11-99024-1982",
        "email": "contato@geislerviana.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Quatinga, 2b",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "02140-170",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-23.4794",
          "longitude": "-46.6431"
        },
        "openingHours": [
          "Mo-Fr 09:00-18:00",
          "Sa 09:00-14:00"
        ],
        "medicalSpecialty": "Traditional Chinese Medicine",
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Medicina Tradicional Chinesa",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Qi Gong",
                "description": "Exercícios terapêuticos que combinam movimentos suaves, respiração e meditação para cultivar a energia vital"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Tuina",
                "description": "Massagem terapêutica chinesa que combina técnicas manuais para relaxamento e cura natural"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Acupuntura",
                "description": "Técnica milenar para equilibrar a energia vital e tratar diversos desequilíbrios por meio de pontos específicos"
              }
            }
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-11-99024-1982",
          "contactType": "customer service",
          "availableLanguage": ["Portuguese", "English"]
        }
      },
      // Person (Geisler Viana)
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Geisler Viana",
        "alternateName": "Guy Vina",
        "jobTitle": "Especialista em Medicina Tradicional Chinesa",
        "description": "Profissional em terapias integrativas baseadas na Medicina Tradicional Chinesa, especializado em Qi Gong, Tuina e Acupuntura",
        "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=400&auto=format&fit=crop&crop=face",
        "url": "https://guyvina.com",
        "sameAs": [
          "https://guyvina.com/sobre-guy-vina-medicina-chinesa"
        ],
        "worksFor": {
          "@type": "MedicalBusiness",
          "name": "Geisler Viana - Medicina Tradicional Chinesa"
        },
        "knowsAbout": [
          "Medicina Tradicional Chinesa",
          "Qi Gong",
          "Tuina",
          "Acupuntura",
          "Terapias Integrativas"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Quatinga, 2b",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "02140-170",
          "addressCountry": "BR"
        }
      },
      // Service - Qi Gong
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Qi Gong",
        "description": "Exercícios terapêuticos que combinam movimentos suaves, respiração e meditação para cultivar a energia vital",
        "provider": {
          "@type": "Person",
          "name": "Geisler Viana"
        },
        "serviceType": "Terapia Tradicional Chinesa",
        "areaServed": "São Paulo, SP, Brasil"
      },
      // Service - Tuina
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tuina",
        "description": "Massagem terapêutica chinesa que combina técnicas manuais para relaxamento e cura natural",
        "provider": {
          "@type": "Person",
          "name": "Geisler Viana"
        },
        "serviceType": "Terapia Tradicional Chinesa",
        "areaServed": "São Paulo, SP, Brasil"
      },
      // Service - Acupuntura
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Acupuntura",
        "description": "Técnica milenar para equilibrar a energia vital e tratar diversos desequilíbrios por meio de pontos específicos",
        "provider": {
          "@type": "Person",
          "name": "Geisler Viana"
        },
        "serviceType": "Terapia Tradicional Chinesa",
        "areaServed": "São Paulo, SP, Brasil"
      }
    ]
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section com banner principal */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/lovable-uploads/9a1adaaf-2be6-4d5e-8cfd-2e127a678801.png')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <LazyImage 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop&crop=face"
              alt="Geisler Viana, especialista em Medicina Tradicional Chinesa"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-bronze"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight font-serif">
            TERAPIA TRADICIONAL CHINESA
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-200 font-light">
            Transforme sua saúde com Qi Gong.<br />
            Uma terapia chinesa milenar, feita para o seu equilíbrio físico e emocional.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Descubra tratamentos personalizados de Medicina Tradicional Chinesa para seu bem-estar integral.
          </p>
          <Button 
            size="lg" 
            className="bg-bronze text-white hover:bg-white hover:text-bronze border-2 border-bronze font-semibold text-lg px-12 py-4"
            asChild
          >
            <Link to="/contato-consulta-acupuntura">Agende Consulta</Link>
          </Button>
        </div>
      </section>

      {/* Seção de Apresentação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
              Geisler Viana
            </h2>
            <h3 className="text-xl text-bronze mb-4 font-semibold">
              Profissional em Terapias Tradicionais Chinesas
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sou Geisler Viana, profissional em terapias integrativas baseadas na Medicina Tradicional Chinesa. 
              Com ampla experiência, ofereço tratamentos naturais que promovem equilíbrio energético e bem-estar físico e emocional.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Uso diferentes técnicas da Medicina Tradicional Chinesa para oferecer um tratamento 
              personalizado, pensado nas necessidades únicas de cada pessoa.
            </p>
            <Button 
              size="lg"
              className="bg-bronze text-white hover:bg-white hover:text-bronze border-2 border-bronze font-semibold px-8 py-3"
              asChild
            >
              <Link to="/sobre-guy-vina-medicina-chinesa">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Principais Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Nossos Projetos e Serviços
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos vários tratamentos da Medicina Tradicional Chinesa 
              para cuidar da sua saúde e bem-estar de um jeito natural e eficiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Qi Gong */}
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl" aria-hidden="true">氣功</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-3">Qi Gong</h3>
              <p className="text-gray-700">
                Exercícios terapêuticos que combinam movimentos suaves, respiração e meditação para cultivar a energia vital.
              </p>
            </article>

            {/* Tuina */}
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl" aria-hidden="true">推拿</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-3">Tuina</h3>
              <p className="text-gray-700">
                Massagem terapêutica chinesa que combina técnicas manuais para relaxamento e cura natural.
              </p>
            </article>

            {/* Acupuntura */}
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl" aria-hidden="true">針刺</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-3">Acupuntura</h3>
              <p className="text-gray-700">
                Técnica milenar para equilibrar a energia vital e tratar diversos desequilíbrios por meio de pontos específicos.
              </p>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-deep-blue hover:bg-blue-800 text-white font-semibold px-8 py-3"
              asChild
            >
              <Link to="/servicos-medicina-tradicional-chinesa">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Por que Escolher a MTC?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A Medicina Tradicional Chinesa cuida da saúde de forma natural e completa, 
              tratando não só os sintomas, mas também as causas dos desequilíbrios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl" aria-hidden="true">自然</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">Tratamento Natural</h3>
              <p className="text-gray-700">
                Utiliza recursos naturais como plantas, técnicas manuais e estimulação de pontos específicos.
              </p>
            </article>

            <article className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl" aria-hidden="true">綜合</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">Abordagem Integral</h3>
              <p className="text-gray-700">
                A Medicina Tradicional Chinesa trata a pessoa por completo, levando em conta o corpo, as emoções e a energia.
              </p>
            </article>

            <article className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl" aria-hidden="true">平衡</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">Equilíbrio Energético</h3>
              <p className="text-gray-700">
                Restaura o equilíbrio natural do corpo através da harmonização da energia vital (Qi).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Seção Conhecimento e Bem-estar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
              Conhecimento e Bem-estar
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mantenha-se informado com artigos e dicas sobre Medicina Tradicional Chinesa, 
              bem-estar e qualidade de vida para uma vida mais saudável e equilibrada.
            </p>
            <Button 
              size="lg"
              className="bg-bronze text-white hover:bg-white hover:text-bronze border-2 border-bronze font-semibold px-8 py-3"
              asChild
            >
              <Link to="/blog-medicina-chinesa">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
