import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const About = () => {
  useSEO({
    title: "Sobre Geisler Viana | Especialista em Medicina Tradicional Chinesa",
    description: "Conheça a trajetória de Geisler Viana, especialista em MTC com anos de experiência em acupuntura, fitoterapia e bem-estar integral.",
    keywords: "geisler viana, qi gong, medicina tradicional chinesa, especialista mtc, acupuntura, fitoterapia, experiência, trajetória",
    canonicalUrl: "https://terapiachinesageisler.com.br/sobre-guy-vina-medicina-chinesa",
    ogTitle: "Sobre Geisler Viana | Especialista em Medicina Tradicional Chinesa",
    ogDescription: "Conheça a trajetória de Geisler Viana, especialista em MTC com anos de experiência em acupuntura, fitoterapia e bem-estar integral.",
    ogUrl: "https://terapiachinesageisler.com.br/sobre-guy-vina-medicina-chinesa"
  });

  const specialties = [
    {
      title: "Qi Gong",
      description: "Exercícios tradicionais chineses que combinam movimento, respiração e meditação para harmonizar a energia vital."
    },
    {
      title: "Tuina",
      description: "Massagem terapêutica chinesa que trabalha os pontos de acupuntura através do toque e manipulação."
    },
    {
      title: "Acupuntura",
      description: "Técnica milenar chinesa que usa agulhas finas para melhorar o equilíbrio da energia no corpo."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/lovable-uploads/2a64f723-3471-4b19-83fa-013cc7730958.png)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Geisler Viana
            </h1>
            <p className="text-xl text-gray-200">
              Terapeuta de Medicina Tradicional Chinesa – Qi Gong, Massagem Tuiná, Acupuntura e Fitoterapia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img
                src="/lovable-uploads/geisler-viana-qi-gong-sobre.jpg"
                alt="Geisler Viana, especialista em Medicina Tradicional Chinesa"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
        
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sou Geisler Viana, Terapeuta de Medicina Tradicional Chinesa (MTC). Ajudo pessoas a cuidarem da saúde de forma mais natural, integral e consciente, tratando não apenas os sintomas, mas as causas profundas dos desequilíbrios físicos, emocionais e energéticos.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Minha abordagem é baseada no Taoismo, que busca equilibrar corpo, mente e espírito. Acredito que a verdadeira saúde é resultado do equilíbrio interno, da circulação livre da energia vital (Qi) e do cultivo diário do bem-estar.
              </p>
            </div>
          </div>

          {/* Caminhada */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8">
              Minha Caminhada na Medicina Tradicional Chinesa
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Minha trajetória na MTC começou há mais de três décadas, em 1992, com a prática de Kung Fu, arte marcial que despertou meu interesse pelas filosofias orientais e pelo cultivo da energia interna. A partir dessa base, aprofundei-me no Qi Gong, prática milenar de respiração e movimento que promove equilíbrio físico, mental e energético.
            </p>

            <h3 className="text-2xl font-bold text-deep-blue mb-6">
              Formação Técnica e Especializações:
            </h3>

            <ul className="text-lg text-gray-700 mb-8 space-y-2">
              <li>• Massagem Tuiná – CEMETRAC (2010–2011)</li>
              <li>• Acupuntura Tradicional – Shen Long (2011)</li>
              <li>• Acupuntura Clássica e Avançada – CEMETRAC (2012–2014)</li>
              <li>• Fitoterapia Chinesa – CEMETRAC (2014)</li>
              <li>• Qi Gong Zhan Zhuang – ETOSP (2024)</li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Com alicerce em mais de uma década de estudos na Medicina Tradicional Chinesa, atuo com foco no Qigong. Desenvolvi uma abordagem personalizada e empática, voltada a pessoas que buscam restaurar sua saúde de forma integral através do cultivo da energia vital, utilizando também outras ferramentas terapêuticas da MTC como:
            </p>

            <ul className="text-lg text-gray-700 mb-8 space-y-2">
              <li>• Acupuntura Tradicional Chinesa</li>
              <li>• Massagem Tuiná (técnicas terapêuticas e energéticas)</li>
              <li>• Fitoterapia Chinesa (uso de plantas e fórmulas clássicas)</li>
              <li>• Exercícios de Qi Gong (Zhan Zhuang, e outros)</li>
            </ul>
          </div>

          {/* Quem eu Auxilio */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8">
              Quem Eu Ajudo
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Trabalho com pessoas que:
            </p>
            <ul className="text-lg text-gray-700 mb-8 space-y-2">
              <li>• Desejam uma abordagem natural e profunda para questões de saúde</li>
              <li>• Sofrem com dores crônicas, estresse, ansiedade ou distúrbios do sono</li>
              <li>• Buscam equilíbrio emocional e clareza mental</li>
              <li>• Estão em transições de vida e querem reconectar com sua vitalidade</li>
              <li>• Procuram práticas orientais para longevidade, bem-estar e autoconhecimento</li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Atendo adultos de todas as idades, com especial atenção a pessoas acima dos 50 anos, que desejam envelhecer com vitalidade, equilíbrio e autonomia, integrando práticas como o Qi Gong terapêutico em sua rotina.
            </p>
          </div>

          {/* Missão */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8">
              Minha Missão
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Minha missão é guiar cada pessoa em um caminho de autocuidado e reconexão com sua energia vital, oferecendo uma escuta profunda e tratamentos baseados nos fundamentos da Medicina Tradicional Chinesa.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Se você sente que é hora de cuidar de si com mais atenção, presença e equilíbrio, estou aqui para caminhar ao seu lado.
            </p>
            <Link to="/servicos-medicina-tradicional-chinesa">
              <Button className="bg-deep-blue hover:bg-blue-800">
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Técnicas milenares adaptadas às necessidades modernas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-deep-blue">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 bg-gray-50 text-deep-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-blue">
              Os Meus Diferenciais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-bronze">Abordagem Empática</h3>
                <p className="text-deep-blue">
                  Cada paciente é único. Desenvolvo tratamentos personalizados baseados 
                  na escuta ativa e compreensão das necessidades individuais.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-bronze">Método Personalizado</h3>
                <p className="text-deep-blue">
                  Combino diferentes técnicas da MTC para criar um plano terapêutico 
                  específico para cada caso e condição.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato-consulta-acupuntura">
                <Button className="bg-bronze hover:bg-yellow-600">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
