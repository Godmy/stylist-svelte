export interface IReactionPickerProps {
  reactions: Array<{ type: string; count: number; active: boolean }>;
  selectedReaction?: string;
  size?: 'sm' | 'md' | 'lg';
  showPickerOnHover?: boolean;
  showCounts?: boolean;
  showPicker?: boolean;
  reactionClass?: string;
  pickerClass?: string;
  onReactionToggle?: (type: string) => void;
  onSelect?: (reaction: string) => void;
  class?: string;
}

export interface IReactionPickerStyleClasses {
  base?: string;
  reaction?: string;
  selected?: string;
}
