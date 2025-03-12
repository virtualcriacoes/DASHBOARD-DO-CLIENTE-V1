import React, { useState } from 'react';
import { 
  Headphones, 
  Music, 
  Radio, 
  Rocket, 
  Download, 
  CheckCircle 
} from 'lucide-react';

// Mock data - in a real app, this would come from an API
const referralContent = {
  heroSection: {
    title: 'INDIQUE E GANHE',
    description: 'A nossa empresa criou um sistema incrível para você conquistar a fidelidade de nossos clientes que indicam novos assinantes para os nossos serviços de streaming de áudio ou outro produto. Quanto mais você indica, mais benefícios você ganha!'
  },
  howToParticipate: [
    {
      id: '1',
      title: 'Passo 1',
      content: 'Reúna seu Código de Indicação Exclusivo'
    },
    {
      id: '2', 
      title: 'Passo 2',
      content: 'Indique para amigos, familiares ou colegas'
    },
    {
      id: '3',
      title: 'Passo 3', 
      content: 'Quando seu indicado assinar, você ganha benefícios'
    }
  ],
  banners: [
    {
      id: '1',
      title: 'Banner 1',
      imageUrl: 'https://via.placeholder.com/300x200?text=Banner+1'
    },
    {
      id: '2',
      title: 'Banner 2',
      imageUrl: 'https://via.placeholder.com/300x200?text=Banner+2'
    },
    {
      id: '3',
      title: 'Banner 3',
      imageUrl: 'https://via.placeholder.com/300x200?text=Banner+3'
    },
    {
      id: '4',
      title: 'Banner 4',
      imageUrl: 'https://via.placeholder.com/300x200?text=Banner+4'
    }
  ],
  discountFeatures: [
    {
      id: '1',
      icon: 'discount',
      title: 'Desconto na Mensalidade',
      description: 'Ao indicar, você ganha descontos progressivos nas mensalidades.'
    },
    {
      id: '2',
      icon: 'automatic',
      title: 'Concessão Automática de Desconto',
      description: 'Descontos são aplicados automaticamente após cada indicação.'
    },
    {
      id: '3',
      icon: 'validity',
      title: 'Validade do Programa',
      description: 'Programa mantém benefícios para clientes que continuam indicando.'
    },
    {
      id: '4',
      icon: 'usage',
      title: 'Utilização do Desconto',
      description: 'Descontos podem ser usados para abater valor da próxima mensalidade.'
    }
  ],
  exclusiveContents: [
    {
      id: '1',
      icon: 'music-library',
      title: 'Acervo de Músicas Diversificado',
      description: 'Tenha acesso a um catálogo extenso com músicas de diversos gêneros.'
    },
    {
      id: '2',
      icon: 'monthly-updates',
      title: 'Atualizações Mensais',
      description: 'Novos conteúdos e atualizações mensais para manter seu acervo atualizado.'
    },
    {
      id: '3',
      icon: 'personalized-playlist',
      title: 'Webistas Personalizadas',
      description: 'Crie playlists personalizadas com seleção única para sua programação.'
    },
    {
      id: '4',
      icon: 'content-access',
      title: 'Acesso ao Conteúdo',
      description: 'Conteúdos exclusivos e antecipados disponíveis apenas para assinantes.'
    }
  ]
};

function Referrals() {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    'discount': <CheckCircle className="text-primary w-8 h-8" />,
    'automatic': <CheckCircle className="text-primary w-8 h-8" />,
    'validity': <CheckCircle className="text-primary w-8 h-8" />,
    'usage': <CheckCircle className="text-primary w-8 h-8" />,
    'music-library': <Headphones className="text-primary w-8 h-8" />,
    'monthly-updates': <Music className="text-primary w-8 h-8" />,
    'personalized-playlist': <Radio className="text-primary w-8 h-8" />,
    'content-access': <Download className="text-primary w-8 h-8" />
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-600 text-white py-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">{referralContent.heroSection.title}</h1>
            <p className="text-lg">{referralContent.heroSection.description}</p>
            <div className="mt-6">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                COMO PARTICIPAR
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img 
              src="https://via.placeholder.com/400x400?text=Astronaut" 
              alt="Astronaut" 
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
      </div>

      {/* How to Participate */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Como Participar</h2>
        <div className="grid grid-cols-3 gap-8">
          {referralContent.howToParticipate.map((step, index) => (
            <div 
              key={step.id} 
              className={`
                bg-white shadow-lg rounded-lg p-6 text-center 
                transform transition-all duration-300
                ${activeStep === index ? 'scale-105 border-2 border-primary' : 'hover:shadow-xl'}
              `}
              onClick={() => setActiveStep(index)}
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Banners */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Banners Personalizados</h2>
          <div className="grid grid-cols-4 gap-6">
            {referralContent.banners.map(banner => (
              <div 
                key={banner.id} 
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img 
                  src={banner.imageUrl} 
                  alt={banner.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discount Features */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Desconto na Mensalidade</h2>
        <div className="grid grid-cols-4 gap-6">
          {referralContent.discountFeatures.map(feature => (
            <div 
              key={feature.id} 
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
            >
              {iconMap[feature.icon as keyof typeof iconMap]}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Contents */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Conteúdos Exclusivos para sua Rádio!</h2>
          <div className="grid grid-cols-4 gap-6">
            {referralContent.exclusiveContents.map(content => (
              <div 
                key={content.id} 
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
              >
                {iconMap[content.icon as keyof typeof iconMap]}
                <h3 className="text-xl font-semibold mt-4 mb-2">{content.title}</h3>
                <p className="text-gray-600">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-primary-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Seja Nosso Cliente</h2>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition">
          FALE CONOSCO
        </button>
      </div>
    </div>
  );
}

export default Referrals;
