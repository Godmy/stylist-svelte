import type { HtmlAttributesBase } from './common';

export type SentimentResult = {
  score: number;
  label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
  confidence: number;
  breakdown?: {
    positive: number;
    neutral: number;
    negative: number;
  };
};

export interface SentimentAnalysisProps extends HtmlAttributesBase<HTMLDivElement> {
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
}
