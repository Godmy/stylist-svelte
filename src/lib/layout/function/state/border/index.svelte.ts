import type { BorderRecipe as BorderRecipe } from '$stylist/layout/interface/recipe/border';
import { clsx } from 'clsx';

export function createBorderState(props: BorderRecipe) {
	const borderStyle = $derived(props.borderStyle ?? 'solid');
	const borderWidth = $derived(props.borderWidth ?? '1px');
	const borderColor = $derived(props.borderColor ?? '');
	const borderRadius = $derived(props.borderRadius ?? '');
	const borderTop = $derived(props.borderTop ?? false);
	const borderBottom = $derived(props.borderBottom ?? false);
	const borderLeft = $derived(props.borderLeft ?? false);
	const borderRight = $derived(props.borderRight ?? false);
	const animated = $derived(props.animated ?? false);

	const classes = $derived.by(() => {
		const baseClasses: string[] = ['relative'];

		// Стиль границы
		if (borderStyle !== 'none' && borderStyle !== 'invisible') {
			if (borderTop) baseClasses.push('border-t');
			else if (borderBottom) baseClasses.push('border-b');
			else if (borderLeft) baseClasses.push('border-l');
			else if (borderRight) baseClasses.push('border-r');
			else baseClasses.push('border');

			// Стиль
			if (borderStyle === 'dashed') baseClasses.push('border-dashed');
			else if (borderStyle === 'dotted') baseClasses.push('border-dotted');
			else if (borderStyle === 'double') baseClasses.push('border-double');
			else if (borderStyle === 'bold') baseClasses.push('border-2');
			else baseClasses.push('border-solid');
		}

		// Анимация
		if (animated) {
			baseClasses.push('border-animated');
		}

		return clsx(...baseClasses, props.class ?? '');
	});

	const styles = $derived.by(() => {
		const styles: Record<string, string | number> = {};

		if (borderWidth && !['1px', '2px'].includes(borderWidth)) {
			if (borderTop || borderBottom || borderLeft || borderRight) {
				if (borderTop) styles['border-top-width'] = borderWidth;
				if (borderBottom) styles['border-bottom-width'] = borderWidth;
				if (borderLeft) styles['border-left-width'] = borderWidth;
				if (borderRight) styles['border-right-width'] = borderWidth;
			} else {
				styles['border-width'] = borderWidth;
			}
		}

		if (borderColor) {
			styles['--border-color'] = borderColor;
		}

		if (borderRadius) {
			styles['border-radius'] = borderRadius;
		}

		return styles;
	});

	return {
		get borderStyle() {
			return borderStyle;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createBorderState;
