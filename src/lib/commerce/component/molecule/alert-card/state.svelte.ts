import type { Preset } from '$stylist/commerce/type/preset/preset';
import type { RecipeAlertCard } from '$stylist/commerce/interface/recipe/alert-card';
import { AlertCardManager } from '$stylist/commerce/class/manager/alert-card';
import { resolveAriaLabel } from '$stylist/theme/function/resolve/aria-label';

export function createAlertCardState<V extends string, S extends string>(
	preset: Preset<V, S>,
	props: RecipeAlertCard
) {
	const variant = $derived((props.variant ?? preset.defaults.variant) as V);
	const size = $derived((props.size ?? preset.defaults.size) as S);
	const disabled = $derived(props.disabled ?? preset.defaults.disabled);

	const classes = $derived(
		AlertCardManager.buildPresetClassNames(preset, {
			variant,
			size,
			disabled: typeof disabled === 'boolean' ? disabled : undefined,
			className: props.class ? String(props.class) : ''
		})
	);

	const ariaLabel = $derived(
		resolveAriaLabel(
			typeof props.ariaLabel === 'string' ? props.ariaLabel : undefined,
			props as Record<string, unknown>,
			''
		)
	);

	const attrs = $derived({
		'aria-disabled': typeof disabled === 'boolean' ? disabled : undefined,
		'aria-label': ariaLabel || undefined,
		disabled: typeof disabled === 'boolean' ? disabled : undefined
	});

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get attrs() {
			return attrs;
		}
	};
}
