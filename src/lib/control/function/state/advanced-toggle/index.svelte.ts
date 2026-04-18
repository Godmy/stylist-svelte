import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { RecipeAdvancedToggleProps as RecipeAdvancedToggleProps } from '$stylist/control/interface/recipe/advanced-toggle-props';
import { TogglesStyleManager } from '$stylist/control/class/style-manager/toggles';

export const createAdvancedToggleState = (props: RecipeAdvancedToggleProps) => {
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const label = $derived(props.label ?? '');
	let localChecked = $state(props.checked ?? false);

	$effect(() => {
		localChecked = props.checked ?? false;
	});

	const containerClasses = $derived(
		TogglesStyleManager.getToggleContainerClasses(props.class)
	);
	const labelWrapperClasses = $derived(
		joinClassNames('flex items-center space-x-2')
	);
	const toggleContainerClasses = $derived(
		TogglesStyleManager.getToggleContainerClasses(props.class)
	);
	const trackClasses = $derived(
		TogglesStyleManager.getToggleTrackClasses(disabled, localChecked)
	);
	const thumbClasses = $derived(
		TogglesStyleManager.getToggleThumbClasses('md', disabled, localChecked)
	);
	const hiddenInputClasses = $derived(
		joinClassNames(
			'absolute left-0 top-0 opacity-[var(--opacity-0)] w-full h-full cursor-pointer',
			disabled ? 'cursor-not-allowed' : ''
		)
	);
	const toggleBackgroundClasses = $derived(trackClasses);
	const toggleHandleClasses = $derived(thumbClasses);
	const sizeClasses = $derived(TogglesStyleManager.getToggleSizeClasses(size));
	const disabledClass = $derived(TogglesStyleManager.getToggleDisabledClass(disabled));
	const labelTextClasses = $derived(
		joinClassNames('text-sm font-medium', disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]')
	);

	return {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get checked() {
			return localChecked;
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
		},
		handleChange() {
			if (disabled) {
				return;
			}

			localChecked = !localChecked;
			props.onValueInput?.(localChecked);
			props.onValueChange?.(localChecked);
			props.onChange?.(localChecked);
		}
	};
};



export default createAdvancedToggleState;











