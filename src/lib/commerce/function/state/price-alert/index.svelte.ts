import type { HTMLAttributes } from 'svelte/elements';
import type { Preset } from '$stylist/interaction/type/struct/preset/preset';
import type { RecipePriceAlert } from '$stylist/commerce/interface/recipe/price-alert';
import { buildPresetClassNames } from '$stylist/commerce/function/script/build-preset-class-names';
import { resolveAriaLabel } from '$stylist/theme/function/resolve/aria-label';

/**
 * Универсальный state creator для PriceAlert
 * Обеспечивает реактивное управление состоянием с использованием Svelte 5 runes
 *
 * @param preset - Конфигурация пресета компонента
 * @param props - Пропсы компонента
 * @returns Реактивный объект состояния с классами, aria-атрибутами и вычисляемыми значениями
 */
export function createPriceAlertState<V extends string, S extends string>(
	preset: Preset<V, S>,
	props: RecipePriceAlert & HTMLAttributes<HTMLDivElement>
) {
	const currentPrice = $derived(props.currentPrice ?? 0);
	const targetPrice = $derived(props.targetPrice ?? 0);
	const currency = $derived(props.currency ?? '$');
	const productName = $derived(props.productName ?? '');
	const variant = $derived((props.variant ?? preset.defaults.variant) as V);
	const size = $derived((props.size ?? preset.defaults.size) as S);
	const disabled = $derived(props.disabled ?? preset.defaults.disabled);
	const isTargetReached = $derived(currentPrice <= targetPrice);
	const statusMsg = $derived(
		isTargetReached
			? `Target price of ${currency}${targetPrice} reached!`
			: `Waiting for price to reach ${currency}${targetPrice}`
	);
	const statusBadgeTypeClass = $derived(
		isTargetReached ? 'price-alert__status-badge--success' : 'price-alert__status-badge--monitoring'
	);

	const classes = $derived(
		buildPresetClassNames(preset, {
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

	const restProps = $derived.by(() => {
		const {
			currentPrice: _currentPrice,
			targetPrice: _targetPrice,
			currency: _currency,
			productName: _productName,
			status: _status,
			variant: _variant,
			size: _size,
			disabled: _disabled,
			onStatusChange: _onStatusChange,
			...rest
		} = props;
		return rest;
	});

	// Использовать геттеры для избежания захвата начальных значений вне реактивного контекста
	return {
		get currentPrice() {
			return currentPrice;
		},
		get targetPrice() {
			return targetPrice;
		},
		get currency() {
			return currency;
		},
		get productName() {
			return productName;
		},
		get statusMsg() {
			return statusMsg;
		},
		get statusBadgeTypeClass() {
			return statusBadgeTypeClass;
		},
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
		},
		get restProps() {
			return restProps;
		}
	};
}
