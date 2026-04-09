import type { HTMLAttributes } from 'svelte/elements';
import type { Props } from '$stylist/information/type/struct';
import type { Preset } from '$stylist/interaction/type/struct/preset';
import { buildPresetClassNames } from '$stylist/interaction/function/script/build-preset-class-names';
import { resolveAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

interface PriceAlertStateProps<V extends string, S extends string>
	extends Omit<Props, 'variant' | 'size'> {
	variant?: V;
	size?: S;
	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: TokenMonitoringType;
	productName?: string;
	onStatusChange?: (status: TokenMonitoringType) => void;
}


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
  props: PriceAlertStateProps<V, S> & HTMLAttributes<HTMLDivElement>
) {
  const variant = $derived((props.variant ?? preset.defaults.variant) as V);
  const size = $derived((props.size ?? preset.defaults.size) as S);
  const disabled = $derived(props.disabled ?? preset.defaults.disabled);

  const classes = $derived(
    buildPresetClassNames(preset, {
      variant,
      size,
      disabled: typeof disabled === 'boolean' ? disabled : undefined,
      className: props.class ? String(props.class) : ''
    })
  );

  const ariaLabel = $derived(resolveAriaLabel(typeof props.ariaLabel === 'string' ? props.ariaLabel : undefined, props as Record<string, unknown>, ''));

  const attrs = $derived({
    'aria-disabled': typeof disabled === 'boolean' ? disabled : undefined,
    'aria-label': ariaLabel || undefined,
    disabled: typeof disabled === 'boolean' ? disabled : undefined
  });

  // Использовать геттеры для избежания захвата начальных значений вне реактивного контекста
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

export default createPriceAlertState;



