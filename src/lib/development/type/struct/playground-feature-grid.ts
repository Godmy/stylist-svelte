export type FeatureIcon = 'sparkles' | 'zap' | 'git-branch' | 'code' | 'layers' | 'users';

export interface FeatureCard {
  title: string;
  description: string;
  palette: string;
  iconBg: string;
  icon: FeatureIcon;
}

export interface Props {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
  class?: string;
}
