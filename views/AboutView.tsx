
import React from 'react';
import { aboutAuthorText } from '../data';

export default function AboutView() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-green-600 pb-4">
          Sobre o Autor
        </h1>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-green-700">Dr. Georgio Silva</h2>
          <p className="text-xl text-gray-600">Fisioterapeuta</p>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700">
          {/* FIX: Correctly split paragraphs by newline characters. The original code was splitting by a literal '\\n\\n' string. */}
          {aboutAuthorText.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}