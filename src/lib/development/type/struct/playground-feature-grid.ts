export type FeatureIcon = 'sparkles' | 'zap' | 'git-branch' | 'code' | 'layers' | 'users';

export type FeatureCard = {
  title: string;
  description: string;
  palette: string;
  iconBg: string;
  icon: FeatureIcon;
}

export type Props = {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
  class?: string;
}
