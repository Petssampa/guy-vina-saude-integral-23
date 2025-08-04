
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Projects = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os projetos e serviços disponíveis.");
    const whatsappUrl = `https://wa.me/351XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/e6414f73-232b-42ed-adf3-6e8582068b22.png')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Projetos
            </h1>
            <p className="text-xl text-gray-200">
              Descubra as diferentes formas de experimentar a Medicina Tradicional Chinesa
            </p>
          </div>
        </div>
      </section>

      {/* New Section - Qi Gong 50+ Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Projeto em desenvolvimento
              </h2>
              <h3 className="text-2xl font-bold text-bronze mb-8">
                Qi Gong para 50+
              </h3>
            </div>

            <div className="space-y-8">
              {/* Objetivo do Projeto */}
              <div>
                <h4 className="text-xl font-bold text-deep-blue mb-4">Objetivo do Projeto:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar aos indivíduos com mais de 50 anos a oportunidade de melhorar sua saúde física e mental por meio das práticas tradicionais do Qi Gong, com foco nas técnicas de Zhan Zhuang, Wu Qin Xi e Ba Duan Jin (opcional). Essas técnicas são ideais para aumentar a vitalidade, promover o relaxamento e restaurar o equilíbrio, ajudando a reduzir o estresse, melhorar a postura e fortalecer o corpo.
                </p>
              </div>

              {/* Técnicas Focadas */}
              <div>
                <h4 className="text-xl font-bold text-deep-blue mb-6">Técnicas Focadas:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {/* Zhan Zhuang */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-deep-blue mb-3">1. Zhan Zhuang (Postura da Árvore)</h5>
                    <p className="text-gray-700 mb-4">
                      <strong>Descrição:</strong> O Zhan Zhuang é uma técnica de meditação em movimento que envolve manter posturas estáticas por períodos de tempo. Com o corpo em posição fixa, você pratica o foco e o alinhamento energético, aumentando a circulação e promovendo o equilíbrio do Qi (energia vital).
                    </p>
                    <div>
                      <strong>Benefícios para 50+:</strong>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Melhora o equilíbrio e a postura</li>
                        <li>Reduz o estresse e ansiedade</li>
                        <li>Fortalece músculos, articulações e ossos</li>
                        <li>Melhora a circulação sanguínea</li>
                        <li>Aumenta a flexibilidade e resistência</li>
                      </ul>
                    </div>
                  </div>

                  {/* Wu Qin Xi */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-deep-blue mb-3">2. Wu Qin Xi (Cinco Animais)</h5>
                    <p className="text-gray-700 mb-4">
                      <strong>Descrição:</strong> O Wu Qin Xi é um conjunto de exercícios baseados nos movimentos de cinco animais: dragão, graça, serpente, tigre e tartaruga. Cada movimento imita as características específicas dos animais para fortalecer diferentes partes do corpo e harmonizar a energia.
                    </p>
                    <div>
                      <strong>Benefícios para 50+:</strong>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Melhora a coordenação e o equilíbrio</li>
                        <li>Fortalece músculos e articulações</li>
                        <li>Estimula a circulação sanguínea</li>
                        <li>Desenvolve a flexibilidade</li>
                        <li>Promove relaxamento mental</li>
                      </ul>
                    </div>
                  </div>

                  {/* Ba Duan Jin */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-deep-blue mb-3">3. Ba Duan Jin (Oito Brocados) opcional</h5>
                    <p className="text-gray-700 mb-4">
                      <strong>Descrição:</strong> O Ba Duan Jin é uma série de oito exercícios suaves, que ajudam a melhorar a flexibilidade, aumentar a circulação e fortalecer o corpo. Cada movimento do Qi Gong ajuda em uma parte do corpo e da mente, trazendo mais equilíbrio e bem-estar.
                    </p>
                    <div>
                      <strong>Benefícios para 50+:</strong>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Ajuda a deixar o corpo mais solto e as articulações se movendo melhor</li>
                        <li>Aumenta a energia e vitalidade</li>
                        <li>Melhora a saúde cardiovascular</li>
                        <li>Ajuda a melhorar a digestão</li>
                        <li>Reduz a fadiga e o cansaço</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formato do Projeto */}
              <div>
                <h4 className="text-xl font-bold text-deep-blue mb-4">Formato do Projeto:</h4>
                <div className="bg-bronze/10 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-deep-blue mb-3">Aulas Semanais de Qi Gong 50+</h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Objetivo:</strong> Dar aulas online e presenciais de Qi Gong para pessoas com mais de 50 anos. As aulas serão suaves e acessíveis, com ênfase na técnica de Zhan Zhuang.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <strong>Detalhes:</strong>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li><strong>Duração das Aulas:</strong> entre 50 e 60 minutos</li>
                        <li><strong>Frequência:</strong> 1 vez por semana</li>
                      </ul>
                    </div>
                    
                    <div>
                      <strong>Formato das Aulas:</strong>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Aquecimento e alongamentos leves (10 minutos)</li>
                        <li>Prática de Zhan Zhuang (20 minutos)</li>
                        <li>Exercícios Wu Qin Xi (20 minutos)</li>
                        <li>Exercícios Ba Duan Jin (20 minutos) opcional</li>
                      </ul>
                    </div>
                    
                    <div>
                      <strong>Local:</strong>
                      <p className="text-gray-700 mt-1">Presenciais em São Paulo (ou outra cidade conforme a demanda)</p>
                    </div>
                    
                    <div>
                      <strong>Objetivo Principal:</strong>
                      <p className="text-gray-700 mt-1">Auxiliar os participantes a sentirem os benefícios do Qi Gong em sua vida cotidiana, com um foco na redução do estresse, aumento da energia e bem-estar geral.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefícios Esperados */}
              <div>
                <h4 className="text-xl font-bold text-deep-blue mb-4">Benefícios Esperados do Projeto para 50+:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-deep-blue">Redução do Estresse:</h6>
                      <p className="text-gray-700 text-sm">Com a prática constante de Qi Gong, os participantes sentirão uma diminuição do estresse e da ansiedade. Essa técnica ajuda a desbloquear a energia do seu corpo, fazendo com que o Qi (energia vital) flua melhor.</p>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold text-deep-blue">Aumento da Vitalidade:</h6>
                      <p className="text-gray-700 text-sm">As práticas de Zhan Zhuang e Ba Duan Jin são ótimas para revitalizar seu corpo. Mesmo quem tem mobilidade limitada pode praticar de forma segura e ainda assim perceber um aumento significativo de energia.</p>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold text-deep-blue">Melhora no Equilíbrio e Postura:</h6>
                      <p className="text-gray-700 text-sm">O Zhan Zhuang, em particular, ajuda a fortalecer a musculatura profunda, promovendo uma postura melhor e prevenindo quedas — algo crucial para quem está na faixa etária 50+.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-deep-blue">Maior Flexibilidade e Mobilidade Articular:</h6>
                      <p className="text-gray-700 text-sm">Os movimentos de Ba Duan Jin aumentam a flexibilidade e reduzem a rigidez nas articulações, algo muito comum à medida que envelhecemos.</p>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold text-deep-blue">Aumento da Concentração e Clareza Mental:</h6>
                      <p className="text-gray-700 text-sm">As práticas de Qi Gong têm efeitos profundos sobre o foco mental, o que é especialmente útil para a saúde cerebral e o bem-estar psicológico à medida que envelhecemos.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-8">
                <Button 
                  size="lg"
                  className="bg-bronze text-white hover:bg-white hover:text-bronze border-2 border-bronze font-semibold px-8 py-3"
                  onClick={handleWhatsAppClick}
                >
                  Interesse no Projeto Qi Gong 50+
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
              Por que escolher nossos projetos?
            </h2>
            <p className="text-lg text-gray-600">
              Cada projeto é desenvolvido com base em anos de experiência e estudos na fonte da Medicina Tradicional Chinesa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-deep-blue">Abordagem Personalizada</h3>
              <p className="text-gray-600">
                Cada projeto é adaptado às necessidades específicas dos participantes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-deep-blue">Experiência Autêntica</h3>
              <p className="text-gray-600">
                Técnicas tradicionais aprendidas diretamente na China e adaptadas ao contexto moderno.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-deep-blue">Acompanhamento Contínuo</h3>
              <p className="text-gray-600">
                Suporte e orientação durante todo o processo de transformação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;
