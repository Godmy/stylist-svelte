export interface ActionSegmentedControlProps {
  items: string[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  class?: string;
}