import type { BurgerMenuProps } from '$stylist/control/type/struct/burger-menu-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { BURGER_MENU_ARIA_LABEL } from '$stylist/control/const/struct/burger-menu-aria-label';

export function createBurgerMenuState(props: BurgerMenuProps) {
	const open = $derived(props.open ?? false);
	const size = $derived((props.size ?? 'md') as 'sm' | 'md' | 'lg');
	const color = $derived(props.color ?? 'currentColor');
	const activeColor = $derived(props.activeColor ?? 'currentColor');
	const className = $derived(props.class ?? '');

	const sizeClasses: Record<string, string> = {
		sm: 'h-8 w-8',
		md: 'h-10 w-10',
		lg: 'h-12 w-12'
	};

	const iconSizes: Record<string, string> = {
		sm: 'h-4 w-4',
		md: 'h-5 w-5',
		lg: 'h-6 w-6'
	};

	const containerClasses = $derived(
		joinClassNames(
			'inline-flex items-center justify-center rounded-md border border-[--color-border-secondary] bg-[--color-background-primary] transition-colors hover:bg-[--color-background-secondary]',
			sizeClasses[size] ?? sizeClasses.md,
			className
		)
	);

	const iconClasses = $derived(iconSizes[size] ?? iconSizes.md);
	const lineClasses = $derived('absolute left-0 h-0.5 w-full rounded-full transition-all duration-[var(--duration-200)]');
	const ariaLabel = $derived(props.ariaLabel ?? (open ? 'Close menu' : 'Open menu') ?? BURGER_MENU_ARIA_LABEL);

	function handleClick(e: MouseEvent) {
		props.onValueInput?.(e);
		props.onValueChange?.(e);
		props.onClick?.(e);
	}

	return {
		get open() {
			return open;
		},
		get color() {
			return color;
		},
		get activeColor() {
			return activeColor;
		},
		get containerClasses() {
			return containerClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get lineClasses() {
			return lineClasses;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		handleClick
	};
}

export default createBurgerMenuState;
