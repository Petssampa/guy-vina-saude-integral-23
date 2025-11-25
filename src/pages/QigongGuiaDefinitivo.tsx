import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const QigongGuiaDefinitivo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* ✅ CAPA DESTACADA EM TAMANHO COMPLETO */}
      <div className="w-full overflow-hidden">
        <img
          src="/lovable-uploads/praticando-qigong-em-um-ambiente-natural.jpg"
          alt="Qigong: Cultivando Energia Vital, Saúde e Bem-Estar"
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6 mt-8">
          Qigong (Chi Kung): O Guia Definitivo para Cultivar a Energia Vital, Saúde e Bem-Estar
        </h1>

        {/* Resto do conteúdo */}
        <p className="text-gray-700 mb-6">
          A busca por saúde e bem-estar no mundo moderno frequentemente nos leva a soluções complexas...
        </p>

        {/* ... continue com o restante do seu artigo */}
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QigongGuiaDefinitivo;
