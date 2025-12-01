<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { RadioButtonGroupStyleManager } from './RadioButtonGroup.styles';

  type Option = {
    value: string;
    label: string;
    disabled?: boolean;
  };

  type Props = {
    options: Option[];
    value?: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    optionClass?: string;
    labelClass?: string;
    radioClass?: string;
    onInput?: (value: string) => void;
    onChange?: (value: string) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    options = [],
    value = '',
    name = 'radio-group',
    disabled = false,
    required = false,
    orientation = 'vertical',
    class: className = '',
    optionClass = '',
    labelClass = '',
    radioClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedValue = $state(value);

  // Update local state when value prop changes
  $effect(() => {
    if (selectedValue !== value) {
      selectedValue = value;
    }
  });

  function handleInput(optionValue: string) {
    selectedValue = optionValue;

    if (onInput) {
      onInput(optionValue);
    }
  }

  function handleChange(optionValue: string) {
    selectedValue = optionValue;

    if (onChange) {
      onChange(optionValue);
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(RadioButtonGroupStyleManager.getContainerClass(orientation, className));
  const radioClassUpdated = $derived(RadioButtonGroupStyleManager.getRadioClass(radioClass));
  const optionLabelClass = $derived(RadioButtonGroupStyleManager.getOptionLabelClass(labelClass));
</script>

<div class={containerClass} {...restProps}>
  {#each options as option}
    <label
      class={RadioButtonGroupStyleManager.getOptionClass(orientation, option.disabled || disabled, optionClass)}
    >
      <input
        type="radio"
        name={name}
        class={radioClassUpdated}
        bind:group={selectedValue}
        value={option.value}
        oninput={() => handleInput(option.value)}
        onchange={() => handleChange(option.value)}
        disabled={option.disabled || disabled}
        required={required}
      />
      <span class={optionLabelClass}>
        {option.label}
      </span>
    </label>
  {/each}
</div>
