import React from 'react';

export default function AnimatedView() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Exercícios Animados
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Visualize e aprenda cada movimento do programa de exercícios de forma animada.
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-200">
          <div className="relative w-full" style={{ paddingTop: '150%' /* 2:3 Aspect Ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.canva.com/design/DAGbA0rFYc0/qLU7YuBZP8CDl8fA50M2uA/watch?embed"
              allowFullScreen
              allow="fullscreen"
              title="Exercícios Animados"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 text-center bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800">Agora é só apertar o play!</h2>
          <p className="mt-2 text-gray-700">Acompanhe as animações e repita os movimentos com atenção para obter os melhores resultados.</p>
        </div>
      </div>
    </div>
  );
}