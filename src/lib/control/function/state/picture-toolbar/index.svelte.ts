import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { PictureToolbarRecipe as PictureToolbarProps } from '$stylist/media/interface/recipe/picture-toolbar';

type PictureToolbarTool = {
	id: string;
	label: string;
	icon?: string;
};

type PictureToolbarStateProps = PictureToolbarProps & {
	class?: unknown;
	tools: PictureToolbarTool[];
	activeTool?: string;
	onToolSelect?: (toolId: string) => void;
};

// Определение состояния для PictureToolbar
export function createPictureToolbarState(props: PictureToolbarStateProps) {
	const classes = $derived(
		joinClassNames(
			'picture-toolbar flex space-x-2 p-2 bg-[var(--color-background-secondary)] rounded',
			(props.class as string | null | undefined) ?? ''
		)
	);

	const getButtonClasses = (isActive: boolean) => {
		return joinClassNames(
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






