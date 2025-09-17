
import React from 'react';
import { legalText } from '../data';

export default function LegalView() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-green-600 pb-4">
          Aviso Legal e Recomendações
        </h1>

        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 font-medium text-center">{legalText.thanks}</p>
          </section>

          <section className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
            <p className="font-bold">Atenção!</p>
            <p>{legalText.warning}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{legalText.important}</h2>
            <p className="text-gray-700">{legalText.importantText}</p>
          </section>
          
          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{legalText.legalNotice}</h2>
            <p className="text-gray-700 font-semibold mb-4">{legalText.participation}</p>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Termos de Uso</h3>
                <p className="text-gray-700">{legalText.terms}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}