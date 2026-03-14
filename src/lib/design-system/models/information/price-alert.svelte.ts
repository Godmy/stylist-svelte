import type { HTMLAttributes } from 'svelte/elements';
import type { Props } from '$stylist/design-system/contracts';
import type { Preset } from '$stylist/design-system/runtime/types';
import { buildClasses } from '$stylist/utils/classes';
import { computeAriaLabel } from '$stylist/utils/aria';
import type { AlertType } from '$stylist/design-system/tokens/interaction/alert-types';

interface PriceAlertStateProps<V extends string, S extends string>
	extends Omit<Props, 'variant' | 'size'> {
	variant?: V;
	size?: S;
	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: AlertType;
	productName?: string;
	onStatusChange?: (status: AlertType) => void;
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
    buildClasses(preset, {
      variant,
      size,
      disabled,
      className: props.class ? String(props.class) : ''
    })
  );

  const ariaLabel = $derived(computeAriaLabel(props.ariaLabel, props as Record<string, unknown>, ''));

  const attrs = $derived({
    'aria-disabled': disabled,
    'aria-label': ariaLabel || undefined,
    disabled
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







