import React from 'react';

function Settings() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Configurações</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Perfil</h2>
          <p className="text-gray-600">Gerencie suas informações pessoais</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Segurança</h2>
          <p className="text-gray-600">Altere sua senha e configurações de segurança</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
