import { mergeClasses } from '$stylist/design-system/utils/classes';
import { cn } from '$stylist/design-system/utils/classes';
import type { PictureToolbarProps } from '$stylist/design-system/contracts';

// Определение состояния для PictureToolbar
export function createPictureToolbarState(props: PictureToolbarProps) {
	const classes = $derived(mergeClasses('picture-toolbar flex space-x-2 p-2 bg-[var(--color-background-secondary)] rounded', props.class));

	const getButtonClasses = (isActive: boolean) => {
		return mergeClasses(
			'flex items-center justify-center p-2 rounded border transition-colors',
			isActive
				? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] border-[var(--color-primary-500)]'
				: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
		);
	};

	const iconClasses = $derived('w-4 h-4');

	return {
		get classes() {
			return classes;
		},
		get tools() {
			return props.tools;
		},
		get activeTool() {
			return props.activeTool;
		},
		get onToolSelect() {
			return props.onToolSelect;
		},
		getButtonClasses,
		get iconClasses() {
			return iconClasses;
		}
	};
}

export default createPictureToolbarState;






