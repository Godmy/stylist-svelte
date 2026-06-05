import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotAbbr as AbbrProps } from '$stylist/typography/interface/slot/abbr';

export function createAbbrState(props: AbbrProps) {
	const title = $derived(props.title ?? '');
	const classes = $derived(
		mergeClassNames('c-typography-abbr', typeof props.class === 'string' ? props.class : undefined)
	);

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAbbrState;
