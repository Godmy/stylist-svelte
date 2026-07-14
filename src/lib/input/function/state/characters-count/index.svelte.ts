import createCharacterCountScriptState from '$stylist/input/function/state/character-count/index.svelte';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotCharacterCount as ICharacterCountProps } from '$stylist/input/interface/slot/character-count';

export const createCharactersCountState = (props: ICharacterCountProps) => {
	const percentage = $derived(
		props.max && props.max > 0 ? Math.min(100, ((props.current ?? 0) / props.max) * 100) : 0
	);
	const ratio = $derived(props.max ? (props.current ?? 0) / props.max : 0);
	const message = $derived(
		props.showPercentage
			? `${Math.round(percentage)}% (${props.current ?? 0}/${props.max ?? 0})`
			: `${props.current ?? 0}/${props.max ?? 0}`
	);
	const state = $derived(
		createCharacterCountScriptState(ratio, {
			variant: 'default',
			size: 'md',
			class: props.class
		})
	);

	return {
		get message() {
			return message;
		},
		get classes() {
			return mergeClassNames('characters-count', state.colorClass, props.class);
		}
	};
};

export default createCharactersCountState;
