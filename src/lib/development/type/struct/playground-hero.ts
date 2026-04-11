export type AIModel = {
  name: string;
  url: string;
  logo: string;
  bgColor: string;
  description: string;
};

export type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  badgeLabel?: string;
  badgeHref?: string;
  poweredByLabel?: string;
  aiModels?: AIModel[];
  class?: string;
}
