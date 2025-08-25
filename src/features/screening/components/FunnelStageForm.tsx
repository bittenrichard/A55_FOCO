import React, { useState } from 'react';
import { FunnelStage, CandidateStatus, Candidate } from '../types/FunnelStages';

interface Props {
  candidate: Candidate;
  onUpdate: (candidate: Candidate) => void;
}

const stages = [
  FunnelStage.TRIAGE,
  FunnelStage.VIDEO_INTERVIEW,
  FunnelStage.THEORETICAL_TEST,
  FunnelStage.PRACTICAL_TEST,
  FunnelStage.BEHAVIORAL_PROFILE,
];

const statusOptions: CandidateStatus[] = ['aprovado', 'reprovado', 'em andamento'];

export const FunnelStageForm: React.FC<Props> = ({ candidate, onUpdate }) => {
  const [stage, setStage] = useState<FunnelStage>(candidate.currentStage);
  const [status, setStatus] = useState<CandidateStatus>(candidate.status);
  const [videoUrl, setVideoUrl] = useState(candidate.videoUrl || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedCandidate: Candidate = {
      ...candidate,
      currentStage: stage,
      status,
      videoUrl,
      evolutionHistory: [
        ...candidate.evolutionHistory,
        { stage, date: new Date().toISOString(), status },
      ],
    };
    onUpdate(updatedCandidate);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <label>
        Etapa do Funil:
        <select value={stage} onChange={e => setStage(e.target.value as FunnelStage)}>
          {stages.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={e => setStatus(e.target.value as CandidateStatus)}>
          {statusOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Vídeo (URL ou upload):
        <input
          type="text"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
          placeholder="Cole o link do vídeo ou faça upload"
        />
      </label>
      <br />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Salvar</button>
    </form>
  );
};
