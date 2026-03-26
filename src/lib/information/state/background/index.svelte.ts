import type { BackgroundProps } from '$stylist/information/interface/background';
import { clsx } from 'clsx';

export function createBackgroundState(props: BackgroundProps) {
	const background = $derived(props.background ?? 'default');
	const backgroundColor = $derived(props.backgroundColor ?? '');
	const backgroundImage = $derived(props.backgroundImage ?? '');
	const backgroundPosition = $derived(props.backgroundPosition ?? 'center');
	const backgroundSize = $derived(props.backgroundSize ?? 'cover');
	const backgroundRepeat = $derived(props.backgroundRepeat ?? 'no-repeat');
	const gradient = $derived(props.gradient ?? '');
	const opacity = $derived(props.opacity ?? 1);
	const variant = $derived(props.variant ?? 'default');

	const classes = $derived(() => {
		const baseClasses: string[] = [];

		// Базовые классы для фона
		baseClasses.push('relative');

		// Обработка типа фона
		if (background === 'gradient' && gradient) {
			baseClasses.push('bg-gradient');
		} else if (background === 'image' && backgroundImage) {
			baseClasses.push('bg-image');
		} else if (background === 'particles') {
			baseClasses.push('bg-particles');
		} else {
			baseClasses.push('bg-solid');
		}

		// Вариант
		if (variant !== 'default') {
			baseClasses.push(`bg-${variant}`);
		}

		return clsx(...baseClasses, props.class ?? '');
	});

	const styles = $derived(() => {
		const styles: Record<string, string | number> = {};

		if (backgroundColor) {
			styles['--bg-color'] = backgroundColor;
		}

		if (backgroundImage && background === 'image') {
			styles['background-image'] = `url(${backgroundImage})`;
			styles['background-position'] = backgroundPosition;
			styles['background-size'] = backgroundSize;
			styles['background-repeat'] = backgroundRepeat;
		}

		if (gradient && background === 'gradient') {
			styles['background-image'] = gradient;
		}

		if (opacity < 1) {
			styles.opacity = opacity;
		}

		return styles;
	});

	return {
		get background() {
			return background;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createBackgroundState;
