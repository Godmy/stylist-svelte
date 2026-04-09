export interface IReactionPickerProps {
	reactions?: Array<{
		type: 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view';
		count: number;
		active: boolean;
	}>;
	maxReactions?: number;
	showCounts?: boolean;
	showPicker?: boolean;
	size?: 'sm' | 'md' | 'lg';
	class?: string;
	reactionClass?: string;
	pickerClass?: string;
	onReactionToggle?: (reaction: 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view') => void;
	showPickerOnHover?: boolean;
}
