import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import { ManagerMotion } from '$stylist/animation/class/manager/motion';
import type { RecipeAnimatedDigit } from '$stylist/animation/interface/recipe/animated-digit';

export const createAnimatedDigitState = (props: RecipeAnimatedDigit) => {
	// SlotState
	let isAnimating = $state(false);
	let currentValue = $state(props.from ?? 0);

	// Нормализация props
	const normalizedProps = $derived(ManagerMotion.normalizeAnimateContract(props));

	// Вычисляемые классы
	const classes = $derived.by(() =>
		ClassNamesManager.merge(
			'c-animated-digit',
			isAnimating && 'c-animated-digit--animating',
			normalizedProps.infinite && 'c-animated-digit--infinite',
			typeof props.class === 'string' ? props.class : undefined
		)
	);

	// Вычисляемые inline стили
	const inlineStyle = $derived.by(() =>
		[
			`animation: ${normalizedProps.animation} ${normalizedProps.duration} ${normalizedProps.easing} ${normalizedProps.delay}ms${normalizedProps.infinite ? ' infinite' : ''};`,
			typeof props.style === 'string' ? props.style : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	// Форматирование значения
	const formattedValue = $derived.by(() => {
		if (props.format) {
			return props.format(currentValue);
		}
		return currentValue.toString();
	});
	const children = $derived(props.children);

	// Авто-запуск при изменении props.to
	$effect(() => {
		const _to = normalizedProps.to; // отслеживаем изменения
		startAnimation();
		return () => {
			isAnimating = false;
		};
	});

	// Запуск анимации
	function startAnimation() {
		isAnimating = true;
		const durationValue = (normalizedProps.duration ?? '300ms').toString();
		const duration = durationValue.endsWith('ms')
			? Number.parseFloat(durationValue)
			: durationValue.endsWith('s')
				? Number.parseFloat(durationValue) * 1000
				: Number.parseFloat(durationValue) || 300;
		const startTime = Date.now();
		const from = normalizedProps.from ?? 0;
		const to = normalizedProps.to ?? 1;

		function animate() {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			currentValue = ManagerMotion.interpolateValue(from, to, progress, normalizedProps.easing);

			if (progress < 1 || normalizedProps.infinite) {
				requestAnimationFrame(animate);
			} else {
				isAnimating = false;
				currentValue = to;
			}
		}

		requestAnimationFrame(animate);
	}

	// Остановка анимации
	function stopAnimation() {
		isAnimating = false;
	}

	// Сброс анимации
	function resetAnimation() {
		isAnimating = false;
		currentValue = normalizedProps.from ?? 0;
	}

	return {
		// SlotState getters
		get isAnimating() {
			return isAnimating;
		},
		get currentValue() {
			return currentValue;
		},
		get formattedValue() {
			return formattedValue;
		},
		get children() {
			return children;
		},

		// SlotState
		get classes() {
			return classes;
		},
		get inlineStyle() {
			return inlineStyle;
		},

		// Actions
		startAnimation,
		stopAnimation,
		resetAnimation
	};
};

export default createAnimatedDigitState;
