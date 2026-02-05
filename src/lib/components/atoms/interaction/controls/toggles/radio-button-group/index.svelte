<script lang="ts">
  import type { RadioButtonGroupProps } from '$stylist/design-system/attributes';
  import { createRadioButtonGroupState } from '../../state.svelte';

  let props: RadioButtonGroupProps = $props();

  const radioGroupState = createRadioButtonGroupState(props);

  let selectedValue = $state(radioGroupState.value);

  $effect(() => {
    if (selectedValue !== radioGroupState.value) {
      selectedValue = radioGroupState.value;
    }
  });

  function handleInput(optionValue: string) {
    selectedValue = optionValue;
    props.onInput?.(optionValue);
  }

  function handleChange(optionValue: string) {
    selectedValue = optionValue;
    props.onChange?.(optionValue);
  }

  const restProps = $derived((() => {
    const {
      options: _options,
      value: _value,
      name: _name,
      disabled: _disabled,
      required: _required,
      orientation: _orientation,
      class: _class,
      optionClass: _optionClass,
      labelClass: _labelClass,
      radioClass: _radioClass,
      onInput: _onInput,
      onChange: _onChange,
      ...rest
    } = props;
    return rest;
  })());
</script>

<div class={radioGroupState.containerClass} {...restProps}>
  {#each radioGroupState.options as option}
    <label class={radioGroupState.getOptionClass(!!option.disabled)}>
      <input
        type="radio"
        name={radioGroupState.name}
        class={radioGroupState.radioInputClass}
        bind:group={selectedValue}
        value={option.value}
        oninput={() => handleInput(option.value)}
        onchange={() => handleChange(option.value)}
        disabled={option.disabled || radioGroupState.disabled}
        required={radioGroupState.required}
      />
      <span class={radioGroupState.optionLabelClass}>{option.label}</span>
    </label>
  {/each}
</div>

