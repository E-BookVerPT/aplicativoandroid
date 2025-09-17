
import React from 'react';
import { introText, recommendations, exercises } from '../data';
import ExerciseCard from '../components/ExerciseCard';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-green-600 pb-2 mb-6 inline-block">
    {children}
  </h2>
);

export default function GuideView() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Intro Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{introText.title}</h2>
        {introText.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 text-lg text-gray-700">{p}</p>
        ))}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{introText.classification.title}</h3>
          <p className="mb-3 text-gray-700"><span className="font-bold">Agudas:</span> {introText.classification.acute}</p>
          <p className="text-gray-700"><span className="font-bold">Crônicas:</span> {introText.classification.chronic}</p>
        </div>
        <p className="mt-8 text-center italic text-gray-600 bg-gray-100 p-4 rounded-md">{introText.quote}</p>
      </section>

      {/* Recommendations Section */}
      <section className="mb-16">
        <SectionTitle>Recomendações</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-800 mb-2">{recommendations.recommended.title}</h3>
            <p className="text-gray-700">{recommendations.recommended.text}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-800 mb-2">{recommendations.notRecommended.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recommendations.notRecommended.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
           <h3 className="text-xl font-bold text-gray-900 mb-4">{recommendations.whatYouNeed.title}</h3>
           <ul className="space-y-4">
             {recommendations.whatYouNeed.items.map((item, i) => (
               <li key={i}><strong className="text-green-700">{item.title}:</strong> <span className="text-gray-700">{item.text}</span></li>
             ))}
           </ul>
        </div>
      </section>

      {/* Exercises Section */}
      <section>
        <SectionTitle>Os 10 Melhores Exercícios</SectionTitle>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Siga estes exercícios passo a passo para ajudar a aliviar e prevenir a dor nas costas. Realize os movimentos de forma lenta e controlada, prestando atenção à sua respiração.
        </p>
        <div>
          {exercises.map(exercise => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>
    </div>
  );
}