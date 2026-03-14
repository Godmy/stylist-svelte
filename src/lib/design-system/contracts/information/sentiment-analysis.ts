import type { HtmlAttributesBase } from './common';

import type { SentimentResult } from '../../types/information/sentiment-analysis';
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



