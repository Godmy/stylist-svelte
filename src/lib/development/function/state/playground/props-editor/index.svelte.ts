import type { PropsEditorRecipe } from '$stylist/development/interface/recipe/props-editor';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

type PropsEditorProps = PropsEditorRecipe & {
	class?: string;
};

export function createPropsEditorState(props: PropsEditorProps) {
	let internalPropValues = $state<Record<string, unknown>>({ ...(props.propValues ?? {}) });
	$effect(() => {
		internalPropValues = { ...(props.propValues ?? {}) };
	});

	const containerClass = $derived(mergeClassNames(props.class ?? ''));

	function handlePropChange(name: string, value: unknown) {
		internalPropValues = { ...internalPropValues, [name]: value };
		props.onPropChange?.(name, value);
	}

	return {
		get internalPropValues() {
			return internalPropValues;
		},
		get containerClass() {
			return containerClass;
		},
		handlePropChange
	};
}

export default createPropsEditorState;
