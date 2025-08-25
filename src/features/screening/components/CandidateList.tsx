import React, { useState } from 'react';
import { Candidate } from '../types/FunnelStages';
import { FunnelStageForm } from './FunnelStageForm';

const initialCandidates: Candidate[] = [
  {
    id: '1',
    name: 'João Silva',
    currentStage: 'Triagem',
    status: 'em andamento',
    evolutionHistory: [],
  },
  {
    id: '2',
    name: 'Maria Souza',
    currentStage: 'Entrevista por Vídeo',
    status: 'em andamento',
    evolutionHistory: [],
  },
];

export const CandidateList: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [selected, setSelected] = useState<Candidate | null>(null);

  const handleUpdate = (updated: Candidate) => {
    setCandidates(candidates.map(c => c.id === updated.id ? updated : c));
    setSelected(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Candidatos</h2>
      <ul>
        {candidates.map(c => (
          <li key={c.id} className="mb-2">
            <span>{c.name} - {c.currentStage} ({c.status})</span>
            <button className="ml-2 px-2 py-1 bg-green-500 text-white rounded" onClick={() => setSelected(c)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
      {selected && (
        <FunnelStageForm candidate={selected} onUpdate={handleUpdate} />
      )}
    </div>
  );
};
