import React from 'react';
import { CandidateList } from './components';

export const ScreeningPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Funil de RH - Fase 1</h1>
      <CandidateList />
    </div>
  );
};
