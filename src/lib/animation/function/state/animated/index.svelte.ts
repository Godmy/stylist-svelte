import { ObjectManagerMotion } from '$stylist/animation/class/object-manager/motion';
import type { SlotAnimate as AnimateProps } from '$stylist/animation/interface/slot/animate';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createAnimatedState = (props: AnimateProps) => {
	// SlotState
	let isAnimating = $state(false);
	let currentValue = $state(props.from ?? 0);

	// Нормализация props
	const normalizedProps = $derived(ObjectManagerMotion.normalizeAnimateContract(props));

	// Вычисляемые классы
	const classes = $derived.by(() =>
		mergeClassNames(
			'c-animated',
			isAnimating && 'c-animated--animating',
			normalizedProps.infinite && 'c-animated--infinite',
			typeof props.class === 'string' ? props.class : undefined
		)
	);

	// Вычисляемые inline стили
	const inlineStyle = $derived.by(
		() =>
			`animation: ${normalizedProps.animation} ${normalizedProps.duration} ${normalizedProps.easing} ${normalizedProps.delay}ms${normalizedProps.infinite ? ' infinite' : ''};`
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
		return () => {
			isAnimating = false;
		};
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

		// SlotState
		get classes() {
			return classes;
		},
		get inlineStyle() {
			return inlineStyle;
		},
		get restProps() {
			return restProps;
		},

		// Actions
		startAnimation,
		stopAnimation,
		resetAnimation
	};
};

export default createAnimatedState;
