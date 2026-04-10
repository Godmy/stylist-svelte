export type ComponentStats = {
  totalComponents: number;
  atoms: number;
  molecules: number;
  organisms: number;
};

export type Props = {
  stats: ComponentStats;
  sectionId?: string;
  animateOnVisible?: boolean;
  durationMs?: number;
  steps?: number;
  class?: string;
} & import('$stylist/information/type/struct').InformationHTMLAttributes<HTMLDivElement>;
