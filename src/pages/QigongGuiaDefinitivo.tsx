import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const QigongGuiaDefinitivo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 py-16">
        <img
          src="/lovable-uploads/praticando-qigong-em-um-ambiente-natural.jpg"
          alt="Pessoa praticando Qigong em ambiente natural"
          className="w-full rounded-lg mb-8"
        />
        
        <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
          Qigong (Chi Kung): O Guia Definitivo para Cultivar a Energia Vital, Saúde e Bem-Estar
        </h1>

        <p className="text-gray-700 mb-6">
          A busca por saúde e bem-estar no mundo moderno frequentemente nos leva a soluções complexas. No entanto, uma tecnologia ancestral da Medicina Chinesa oferece uma abordagem diferente: o Qigong.
        </p>

        <h2 className="text-2xl font-bold text-deep-blue mt-10 mb-4">O Dantien Inferior: Centro de Energia Vital</h2>
        <img
          src="/lovable-uploads/um-ponto-abaixo-do-umbigo-destacando-dan-tien-inferior.jpg"
          alt="Ilustração do Dantien inferior"
          className="w-full rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-6">
          Na Medicina Chinesa, o Dantien inferior — três dedos abaixo do umbigo — é o reservatório principal de Qi (energia vital).
        </p>

        <h2 className="text-2xl font-bold text-deep-blue mt-10 mb-4">Posturas Clássicas: A Garça Branca</h2>
        <img
          src="/lovable-uploads/postura-da-garca-e-movimento-qigong.jpg"
          alt="Postura da Garça em Qigong"
          className="w-full rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-6">
          A "Postura da Garça" desenvolve equilíbrio, concentração e fluxo energético nas pernas e no baixo-ventre.
        </p>

        <h2 className="text-2xl font-bold text-deep-blue mt-10 mb-4">Leitura Recomendada</h2>
        <img
          src="/lovable-uploads/capa-do-livro-a-raiz-do-chi-kung-chines.jpg"
          alt="Capa do livro A Raiz do Chi Kung Chinês"
          className="w-full rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-6">
          A prática regular de Qigong fortalece o sistema imunológico, alivia o estresse e promove equilíbrio profundo.
        </p>

        <p className="text-gray-700 italic mt-8">
          Agende uma sessão e comece sua jornada de equilíbrio hoje.
        </p>
      </article>

      <Footer />
      <WhatsAppVector />
    </div>
  );
};

// Corrige o componente faltando
const WhatsAppVector = () => (
  <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
    <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer">
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp" 
        style={{ width: '60px', height: '60px' }} 
      />
    </a>
  </div>
);

export default QigongGuiaDefinitivo;
