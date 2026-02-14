import type { AdvancedToggleProps } from '$stylist/design-system/props';
import { TogglesStyleManager } from '$stylist/design-system/styles/toggles';
import { mergeClasses } from '$stylist/utils/classes';

export const createAdvancedToggleState = (props: AdvancedToggleProps) => {
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const checked = $derived(props.checked ?? false);
	const label = $derived(props.label ?? '');

	const containerClasses = $derived(
		TogglesStyleManager.getToggleContainerClasses(props.class)
	);
	const labelWrapperClasses = $derived(
		mergeClasses('flex items-center space-x-2')
	);
	const toggleContainerClasses = $derived(
		TogglesStyleManager.getToggleContainerClasses(props.class)
	);
	const trackClasses = $derived(
		TogglesStyleManager.getToggleTrackClasses(disabled, checked)
	);
	const thumbClasses = $derived(
		TogglesStyleManager.getToggleThumbClasses('md', disabled, checked)
	);
	const hiddenInputClasses = $derived(
		mergeClasses(
			'absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer',
			disabled ? 'cursor-not-allowed' : ''
		)
	);
	const toggleBackgroundClasses = $derived(trackClasses);
	const toggleHandleClasses = $derived(thumbClasses);
	const sizeClasses = $derived(TogglesStyleManager.getToggleSizeClasses(size));
	const disabledClass = $derived(TogglesStyleManager.getToggleDisabledClass(disabled));
	const labelTextClasses = $derived(
		mergeClasses('text-sm font-medium', disabled ? 'text-gray-400' : 'text-gray-700')
	);

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
		get label() {
			return label;
		},
		get containerClasses() {
			return containerClasses;
		},
		get labelWrapperClasses() {
			return labelWrapperClasses;
		},
		get toggleContainerClasses() {
			return toggleContainerClasses;
		},
		get trackClasses() {
			return trackClasses;
		},
		get thumbClasses() {
			return thumbClasses;
		},
		get hiddenInputClasses() {
			return hiddenInputClasses;
		},
		get toggleBackgroundClasses() {
			return toggleBackgroundClasses;
		},
		get toggleHandleClasses() {
			return toggleHandleClasses;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get disabledClass() {
			return disabledClass;
		},
		get labelTextClasses() {
			return labelTextClasses;
		}
	};
};

