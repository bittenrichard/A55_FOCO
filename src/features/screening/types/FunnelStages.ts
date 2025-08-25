export enum FunnelStage {
  TRIAGE = 'Triagem',
  VIDEO_INTERVIEW = 'Entrevista por Vídeo',
  THEORETICAL_TEST = 'Teste Teórico',
  PRACTICAL_TEST = 'Teste Prático',
  BEHAVIORAL_PROFILE = 'Perfil Comportamental',
}

export type CandidateStatus = 'aprovado' | 'reprovado' | 'em andamento';

export interface Candidate {
  id: string;
  name: string;
  currentStage: FunnelStage;
  status: CandidateStatus;
  videoUrl?: string;
  evolutionHistory: Array<{
    stage: FunnelStage;
    date: string;
    status: CandidateStatus;
  }>;
}
