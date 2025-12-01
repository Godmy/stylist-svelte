export type LegendItemType = 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';

export type LegendItemVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface ILegendItemProps {
  label: string;
  type: LegendItemType;
  count?: number;
  variant?: LegendItemVariant;
  active?: boolean;
  onClick?: () => void;
}