import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Image as ImageIcon 
} from 'lucide-react';
import { ReferralContent, ReferralSection, ReferralBanner, ReferralFeature } from '../../types/referral';

function ReferralsAdmin() {
  const [referralContent, setReferralContent] = useState<ReferralContent>({
    heroSection: {
      title: 'INDIQUE E GANHE',
      description: 'A nossa empresa criou um sistema incrível para você conquistar a fidelidade de nossos clientes que indicam novos assinantes para os nossos serviços de streaming de áudio ou outro produto.'
    },
    howToParticipate: [],
    banners: [],
    discountFeatures: [],
    exclusiveContents: []
  });

  const [activeModal, setActiveModal] = useState<'hero' | 'participate' | 'banner' | 'discount' | 'content' | null>(null);
  const [currentEdit, setCurrentEdit] = useState<any>(null);

  const handleSaveHeroSection = () => {
    // Save hero section logic
    setActiveModal(null);
  };

  const handleAddParticipationStep = () => {
    const newStep: ReferralSection = {
      id: `step-${referralContent.howToParticipate.length + 1}`,
      title: 'Novo Passo',
      content: 'Descrição do passo'
    };
    setReferralContent(prev => ({
      ...prev,
      howToParticipate: [...prev.howToParticipate, newStep]
    }));
  };

  const handleAddBanner = () => {
    const newBanner: ReferralBanner = {
      id: `banner-${referralContent.banners.length + 1}`,
      title: 'Novo Banner',
      imageUrl: ''
    };
    setReferralContent(prev => ({
      ...prev,
      banners: [...prev.banners, newBanner]
    }));
  };

  const handleAddDiscountFeature = () => {
    const newFeature: ReferralFeature = {
      id: `discount-${referralContent.discountFeatures.length + 1}`,
      icon: 'discount',
      title: 'Nova Funcionalidade',
      description: 'Descrição da funcionalidade'
    };
    setReferralContent(prev => ({
      ...prev,
      discountFeatures: [...prev.discountFeatures, newFeature]
    }));
  };

  const handleAddExclusiveContent = () => {
    const newContent: ReferralFeature = {
      id: `content-${referralContent.exclusiveContents.length + 1}`,
      icon: 'music-library',
      title: 'Novo Conteúdo',
      description: 'Descrição do conteúdo'
    };
    setReferralContent(prev => ({
      ...prev,
      exclusiveContents: [...prev.exclusiveContents, newContent]
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-primary mb-6">Gerenciamento do Programa de Indicação</h1>

      {/* Hero Section Management */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Seção Principal</h2>
          <button 
            onClick={() => setActiveModal('hero')}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600"
          >
            Editar
          </button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">{referralContent.heroSection.title}</h3>
          <p>{referralContent.heroSection.description}</p>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Como Participar</h2>
          <button 
            onClick={handleAddParticipationStep}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 flex items-center"
          >
            <Plus className="mr-2" /> Adicionar Passo
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {referralContent.howToParticipate.map((step, index) => (
            <div key={step.id} className="bg-gray-100 p-4 rounded-lg relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full">
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="text-6xl font-bold text-primary/20 mb-2">{index + 1}</div>
              <h3 className="font-bold">{step.title}</h3>
              <p>{step.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banners Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Banners Personalizados</h2>
          <button 
            onClick={handleAddBanner}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 flex items-center"
          >
            <Plus className="mr-2" /> Adicionar Banner
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {referralContent.banners.map(banner => (
            <div key={banner.id} className="bg-gray-100 p-2 rounded-lg relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full">
                  <Trash2 size={18} />
                </button>
              </div>
              {banner.imageUrl ? (
                <img 
                  src={banner.imageUrl} 
                  alt={banner.title} 
                  className="w-full h-32 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-lg">
                  <ImageIcon className="text-gray-500" />
                </div>
              )}
              <p className="text-center mt-2">{banner.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Features Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Desconto na Mensalidade</h2>
          <button 
            onClick={handleAddDiscountFeature}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 flex items-center"
          >
            <Plus className="mr-2" /> Adicionar Funcionalidade
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {referralContent.discountFeatures.map(feature => (
            <div key={feature.id} className="bg-gray-100 p-4 rounded-lg relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full">
                  <Trash2 size={18} />
                </button>
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Contents Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Conteúdos Exclusivos</h2>
          <button 
            onClick={handleAddExclusiveContent}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 flex items-center"
          >
            <Plus className="mr-2" /> Adicionar Conteúdo
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {referralContent.exclusiveContents.map(content => (
            <div key={content.id} className="bg-gray-100 p-4 rounded-lg relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full">
                  <Trash2 size={18} />
                </button>
              </div>
              <h3 className="font-bold mb-2">{content.title}</h3>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modals for Editing (to be implemented) */}
      {activeModal === 'hero' && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Editar Seção Principal</h2>
            <input 
              type="text" 
              placeholder="Título"
              value={referralContent.heroSection.title}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />
            <textarea 
              placeholder="Descrição"
              value={referralContent.heroSection.description}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setActiveModal(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveHeroSection}
                className="bg-primary text-white px-4 py-2 rounded-lg"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReferralsAdmin;
