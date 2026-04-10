import type { HTMLButtonAttributes } from 'svelte/elements';
import type { PageButtonProps } from '$stylist/control/interface/component/button/other';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';

type PageButtonStateProps = PageButtonProps & HTMLButtonAttributes & {
	isActive?: boolean;
};

export function createPageButtonState(props: PageButtonStateProps) {
	const preset = createBasePreset(
		InteractionStyleManager.getInteractiveVariants(),
		TOKEN_SIZE,
		{
			variant: 'outline',
			size: 'md'
		}
	);

	const isActive = $derived(props.isActive ?? false);
	const actualVariant = $derived(isActive ? 'primary' : (props.variant ?? preset.defaults.variant));
	const actualDisabled = $derived(props.disabled || isActive);
	const loading = $derived(props.loading ?? false);

	const variant = $derived(actualVariant as string);
	const size = $derived((props.size ?? preset.defaults.size) as string);

	const classes = $derived(
		[
			preset.classes.variant[variant as keyof typeof preset.classes.variant],
			preset.classes.size[size as keyof typeof preset.classes.size],
			actualDisabled && preset.classes.state['disabled'],
			loading && preset.classes.state['loading'],
			'page-button',
			props.class
		]
			.filter(Boolean)
			.join(' ')
	);

	const loaderClasses = $derived('animate-spin w-4 h-4');

	const attrs = $derived({
		'aria-busy': typeof loading === 'boolean' ? loading : undefined,
		'aria-live': typeof loading === 'boolean' && loading ? 'polite' : undefined,
		'aria-current': isActive ? 'page' : undefined,
		disabled: typeof actualDisabled === 'boolean' ? actualDisabled : undefined
	});

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return actualDisabled;
		},
		get loading() {
			return loading;
		},
		get isActive() {
			return isActive;
		},
		get classes() {
			return classes;
		},
		get loaderClasses() {
			return loaderClasses;
		},
		get attrs() {
			return attrs;
		}
	};
}

export default createPageButtonState;
