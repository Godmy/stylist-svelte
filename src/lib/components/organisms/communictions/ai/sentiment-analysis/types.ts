import type { HTMLAttributes } from 'svelte/elements';

export type SentimentResult = {
  score: number; // -1 to 1, where -1 is very negative and 1 is very positive
  label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
  confidence: number; // 0 to 1
  breakdown?: {
    positive: number;
    neutral: number;
    negative: number;
  };
};

export type SentimentAnalysisProps = {
  text?: string;
  result?: SentimentResult;
  onAnalyze?: (text: string) => void;
  status?: 'idle' | 'analyzing' | 'completed' | 'error';
  errorMessage?: string;
  class?: string;
  headerClass?: string;
  contentClass?: string;
  inputClass?: string;
  resultClass?: string;
  footerClass?: string;
} & HTMLAttributes<HTMLDivElement>;
