import { AnimatedStyleManager } from '$stylist/animation/class/style-manager/animated';
import { ObjectManagerMotion } from '$stylist/interaction/class/object-manager/motion';
import type { AnimateProps } from '$stylist/animation/interface/proto/animate-props';

export const createAnimatedState = (props: AnimateProps) => {
	// State
	let isAnimating = $state(false);
	let currentValue = $state(props.from ?? 0);

	// Нормализация props
	const normalizedProps = $derived(ObjectManagerMotion.normalizeAnimateContract(props));

	// Вычисляемые классы
	const classes = $derived.by(() =>
		AnimatedStyleManager.getClasses({
			animation: normalizedProps.animation,
			duration: normalizedProps.duration,
			easing: normalizedProps.easing,
			delay: normalizedProps.delay,
			infinite: normalizedProps.infinite,
			isAnimating,
			class: props.class
		})
	);

	// Вычисляемые inline стили
	const inlineStyle = $derived.by(() =>
		AnimatedStyleManager.getAnimationStyle({
			animation: normalizedProps.animation,
			duration: normalizedProps.duration,
			easing: normalizedProps.easing,
			delay: normalizedProps.delay,
			infinite: normalizedProps.infinite
		})
	);

	// Извлечение rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			from,
			to,
			format,
			animation,
			duration,
			easing,
			delay,
			infinite,
			...rest
		} = props;
		return rest;
	});

	// Форматирование значения
	const formattedValue = $derived.by(() => {
		if (props.format) {
			return props.format(currentValue);
		}
		return currentValue.toString();
	});

	// Авто-запуск при изменении props.to
	$effect(() => {
		const _to = normalizedProps.to; // отслеживаем изменения
		startAnimation();
		return () => { isAnimating = false; };
	});

	// Запуск анимации
	function startAnimation() {
		isAnimating = true;
		const duration = parseInt(normalizedProps.duration) || 300;
		const startTime = Date.now();
		const from = normalizedProps.from;
		const to = normalizedProps.to;

		function animate() {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			currentValue = ObjectManagerMotion.interpolateValue(
				from,
				to,
				progress,
				normalizedProps.easing
			);

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
		currentValue = normalizedProps.from;
	}

	return {
		// State getters
		get isAnimating() {
			return isAnimating;
		},
		get currentValue() {
			return currentValue;
		},
		get formattedValue() {
			return formattedValue;
		},

		// State
		get classes() { return classes; },
		get inlineStyle() { return inlineStyle; },
		get restProps() { return restProps; },

		// Actions
		startAnimation,
		stopAnimation,
		resetAnimation
	};
};

export default createAnimatedState;
