import type { ClickProps } from '$stylist/control/interface/component/click/other';
import { clsx } from 'clsx';

export function createClickState(props: ClickProps) {
	const disabled = $derived(props.disabled ?? false);
	const variant = $derived(props.variant ?? 'default');
	const pressEffect = $derived(props.pressEffect ?? true);
	const hoverEffect = $derived(props.hoverEffect ?? true);
	const cursor = $derived(props.cursor ?? (disabled ? 'not-allowed' : 'pointer'));

	const classes = $derived(() => {
		const baseClasses: string[] = ['relative'];

		// Курсор
		if (cursor) {
			if (cursor === 'pointer' || cursor === 'grab') {
				baseClasses.push('cursor-' + cursor);
			} else if (cursor === 'not-allowed') {
				baseClasses.push('cursor-not-allowed');
			} else if (cursor === 'default') {
				baseClasses.push('cursor-default');
			} else {
				baseClasses.push(cursor);
			}
		}

		// Эффекты
		if (!disabled && hoverEffect) {
			baseClasses.push('hover-effect');
		}

		if (!disabled && pressEffect) {
			baseClasses.push('press-effect');
		}

		// Disabled состояние
		if (disabled) {
			baseClasses.push('disabled', 'pointer-events-none', 'opacity-50');
		}

		// Вариант
		if (variant !== 'default') {
			baseClasses.push(`click-${variant}`);
		}

		return clsx(...baseClasses, props.class ?? '');
	});

	return {
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
}

export default createClickState;
