import { createCharacterCountState as createCharacterCountScriptState } from '$stylist/input/function/script/create-character-count-state';
import type { ICharacterCountProps } from '$stylist/input/interface/component/input/other';

export const createCharactersCountState = (props: ICharacterCountProps) => {
	const percentage = $derived(props.max && props.max > 0 ? Math.min(100, ((props.current ?? 0) / props.max) * 100) : 0);
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
			return [state.classes, state.colorClass].filter(Boolean).join(' ');
		}
	};
};

export default createCharactersCountState;
