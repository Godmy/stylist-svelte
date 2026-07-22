import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { RecipePictureToolbar } from '$stylist/media/interface/recipe/picture-toolbar';

export function createPictureToolbarState(props: RecipePictureToolbar) {
	let activeTool = $state(props.activeTool);

	$effect(() => {
		activeTool = props.activeTool;
	});

	const rootClass = $derived(
		joinClassNames('picture-toolbar', (props.class as string | null | undefined) ?? '')
	);

	const iconClasses = $derived('picture-toolbar__icon');

	function selectTool(toolId: string) {
		activeTool = toolId;
		props.onToolSelect?.(toolId);
	}

	const getButtonClasses = (isActive: boolean) =>
		joinClassNames(
			'picture-toolbar__button',
			isActive ? 'picture-toolbar__button--active' : ''
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
