<script lang="ts">
  import SlotCheckbox from '$stylist/control/svelte/atom/toggles/checkbox/index.svelte';
  import { CheckboxGroupStyleManager } from '$stylist/control/class/style-manager/checkbox-group';
  import type { CheckboxGroupProps } from '$stylist/control/type/struct/checkbox-group-props';
  import { createCheckboxGroupState } from '$stylist/control/function/state/checkbox-group';

  let {
    options,
    value = [],
    label,
    description,
    class: hostClass = '',
    itemClass = '',
    disabled = false,
    required = false,
    name,
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: CheckboxGroupProps = $props();
  const state = createCheckboxGroupState({
    options,
    value,
    label,
    description,
    class: hostClass,
    itemClass,
    disabled,
    required,
    name,
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  });

  // Generate CSS classes using the style manager
  const containerClass = $derived(CheckboxGroupStyleManager.getContainerClass(hostClass));
  const legendClass = $derived(CheckboxGroupStyleManager.getLegendClass());
  const descriptionClass = $derived(CheckboxGroupStyleManager.getDescriptionClass());
  const optionsContainerClass = $derived(CheckboxGroupStyleManager.getOptionsContainerClass());
  const requiredIndicatorClass = $derived(CheckboxGroupStyleManager.getRequiredIndicatorClass());
</script>

<fieldset class={containerClass} {...restProps}>
  {#if label}
    <legend class={legendClass}>
      {label} {#if required}<span class={requiredIndicatorClass}>*</span>{/if}
    </legend>
  {/if}

  {#if description}
    <p class={descriptionClass}>{description}</p>
  {/if}

  <div class={optionsContainerClass}>
    {#each options as option}
      <div class={CheckboxGroupStyleManager.getItemWrapperClass(itemClass)}>
        <div class={CheckboxGroupStyleManager.getCheckboxContainerClass()}>
          <SlotCheckbox
            id={option.id}
            name={name}
            value={option.value}
            checked={state.selectedValues.includes(option.value)}
            disabled={disabled || option.disabled}
            onchange={state.handleItemChange(option.value)}
            label={option.label}
          />
        </div>
        <div class={CheckboxGroupStyleManager.getTextContainerClass()}>
          <label for={option.id} class={CheckboxGroupStyleManager.getOptionLabelClass()}>
            {option.label}
          </label>
          {#if option.description}
            <p class={CheckboxGroupStyleManager.getOptionDescriptionClass()}>{option.description}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</fieldset>






