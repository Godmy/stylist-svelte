import type { HTMLInputAttributes } from 'svelte/elements';
import type { ToggleProps } from '$stylist/control/type/struct/toggle-props';
import { TogglesStyleManager } from '$stylist/control/class/style-manager/toggles';
import type { TokenSize } from '$stylist/layout/type/enum/size';

type ToggleStateProps = ToggleProps & HTMLInputAttributes;

export function createToggleState(props: ToggleStateProps) {
	const size = $derived((props.size ?? 'md') as TokenSize);
	const disabled = $derived(props.disabled ?? false);
	const checked = $derived(props.checked ?? false);
	const ariaLabel = $derived(props.ariaLabel ?? 'SlotToggle');

	const containerClasses = $derived(TogglesStyleManager.getToggleContainerClasses(props.class as string | undefined));
	const inputClasses = $derived(TogglesStyleManager.getSwitchInputClasses(disabled));
	const trackClasses = $derived(TogglesStyleManager.getToggleTrackClasses(disabled, checked));
	const thumbClasses = $derived(TogglesStyleManager.getToggleThumbClasses(size, disabled, checked));

	return {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get checked() {
			return checked;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get containerClasses() {
			return containerClasses;
		},
		get inputClasses() {
			return inputClasses;
		},
		get trackClasses() {
			return trackClasses;
		},
		get thumbClasses() {
			return thumbClasses;
		}
	};
}

export default createToggleState;
