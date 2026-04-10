export type StylistCategoryId = 'architecture' | 'information' | 'interaction';

export type StylistOption = {
  id: string;
  label: string;
  description: string;
  hint: string;
  accent: string;
  icon: any;
};

export type StylistCategory = {
  id: StylistCategoryId;
  label: string;
  description: string;
  accent: string;
  icon: any;
  options: StylistOption[];
};

export type StylistSelection = {
  category: StylistCategoryId;
  option: string;
  selections: Record<StylistCategoryId, string>;
};

export interface Props {
  initialCategory?: StylistCategoryId;
  class?: string;
  onSelectionChange?: (selection: StylistSelection) => void;
}
