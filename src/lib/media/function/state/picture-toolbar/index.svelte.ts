import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { PictureToolbarRecipe } from '$stylist/media/interface/recipe/picture-toolbar';
import type { Snippet } from 'svelte';

export type PictureToolbarTool = {
	id: string;
	label: string;
	icon?: string;
};

export type PictureToolbarProps = PictureToolbarRecipe & {
	tools: PictureToolbarTool[];
	activeTool?: string;
	onToolSelect?: (toolId: string) => void;
	children?: Snippet;
};

export function createPictureToolbarState(props: PictureToolbarProps) {
	let activeTool = $state(props.activeTool);

	$effect(() => {
		activeTool = props.activeTool;
	});

	const rootClass = $derived(
		joinClassNames(
			'picture-toolbar flex space-x-2 p-2 bg-[var(--color-background-secondary)] rounded',
			(props.class as string | null | undefined) ?? ''
		)
	);

	const iconClasses = $derived('w-4 h-4');

	function selectTool(toolId: string) {
		activeTool = toolId;
		props.onToolSelect?.(toolId);
	}

	const getButtonClasses = (isActive: boolean) =>
		joinClassNames(
			'flex items-center justify-center p-2 rounded border transition-colors',
			isActive
				? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] border-[var(--color-primary-500)]'
				: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
		);

	return {
		get rootClass() {
			return rootClass;
		},
		get tools() {
			return props.tools;
		},
		get activeTool() {
			return activeTool;
		},
		get iconClasses() {
			return iconClasses;
		},
		getButtonClasses,
		selectTool
	};
}

export default createPictureToolbarState;
