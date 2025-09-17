
import React from 'react';
import type { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row my-6">
      <div className="md:w-1/2 h-80 md:h-auto bg-black">
        <img className="w-full h-full object-cover object-center" src={exercise.image} alt={exercise.title} />
      </div>
      <div className="p-8 flex flex-col justify-center md:w-1/2">
        <div>
          <div className="uppercase tracking-wide text-sm text-green-700 font-semibold">{`Exercício ${exercise.id}`}</div>
          <h2 className="block mt-1 text-2xl leading-tight font-bold text-black">{exercise.title}</h2>
          <p className="mt-4 text-gray-600">{exercise.description}</p>
        </div>
      </div>
    </div>
  );
}