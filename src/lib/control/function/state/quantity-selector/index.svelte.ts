import type { SlotQuantitySelector as IQuantitySelectorProps } from '$stylist/control/interface/slot/quantity-selector';
import type { TokenSelectorKind } from '$stylist/control/type/record/selection-kind';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { QuantitySelectorStyleManager } from '$stylist/control/class/style-manager/quantity-selector';

export function createQuantitySelectorState(props: IQuantitySelectorProps) {
  let quantity = $state(props.value ?? 1);
  const inputId = $derived(`quantity-${Math.random().toString(36).slice(2, 9)}`);

  $effect(() => {
    quantity = props.value ?? 1;
  });

  const rootClasses = $derived(QuantitySelectorStyleManager.getRootClasses(props.class ?? ''));
  const labelClasses = $derived(QuantitySelectorStyleManager.getLabelClasses());
  const containerClasses = $derived(QuantitySelectorStyleManager.getContainerClasses());
  const decrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(
      props.disabled ?? false,
      props.showButtons ?? true,
      true,
      (props.size ?? 'md') as TokenSize,
      props.buttonClass ?? ''
    )
  );
  const incrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(
      props.disabled ?? false,
      props.showButtons ?? true,
      false,
      (props.size ?? 'md') as TokenSize,
      props.buttonClass ?? ''
    )
  );
  const inputClasses = $derived(
    QuantitySelectorStyleManager.getInputClasses(
      props.showButtons ?? true,
      (props.size ?? 'md') as TokenSize,
      (props.variant ?? 'default') as TokenSelectorKind,
      props.inputClass ?? ''
    )
  );
  const iconClasses = $derived(QuantitySelectorStyleManager.getIconClasses());

  function increment() {
    const { disabled = false, max = 99, step = 1, onValueChange, onIncrement } = props;
    if (disabled || quantity >= max) return;
    const newValue = Math.min(quantity + step, max);
    quantity = newValue;
    onValueChange?.(newValue);
    onIncrement?.(newValue);
  }

  function decrement() {
    const { disabled = false, min = 1, step = 1, onValueChange, onDecrement } = props;
    if (disabled || quantity <= min) return;
    const newValue = Math.max(quantity - step, min);
    quantity = newValue;
    onValueChange?.(newValue);
    onDecrement?.(newValue);
  }

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const min = props.min ?? 1;
    const max = props.max ?? 99;
    const step = props.step ?? 1;
    let newValue = parseInt(target.value) || min;
    newValue = Math.max(min, Math.min(max, newValue));
    if (step > 1) {
      newValue = Math.round(newValue / step) * step;
      newValue = Math.max(min, Math.min(max, newValue));
    }
    quantity = newValue;
    props.onValueChange?.(newValue);
  }

  return {
    get quantity() {
      return quantity;
    },
    get inputId() {
      return inputId;
    },
    get rootClasses() {
      return rootClasses;
    },
    get labelClasses() {
      return labelClasses;
    },
    get containerClasses() {
      return containerClasses;
    },
    get decrementButtonClasses() {
      return decrementButtonClasses;
    },
    get incrementButtonClasses() {
      return incrementButtonClasses;
    },
    get inputClasses() {
      return inputClasses;
    },
    get iconClasses() {
      return iconClasses;
    },
    increment,
    decrement,
    handleInputChange
  };
}

export default createQuantitySelectorState;
