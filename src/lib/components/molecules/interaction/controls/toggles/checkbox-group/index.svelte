<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Checkbox from '$stylist/components/atoms/interaction/controls/toggles/checkbox/index.svelte';
  import { CheckboxGroupStyleManager } from '$stylist/design-system/styles/checkbox-group';

  type Option = {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLFieldSetElement>, 'class'>;

  type Props = RestProps & {
    options: Option[];
    value?: string[];
    label?: string;
    description?: string;
    class?: string;
    itemClass?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    onValueInput?: (values: string[]) => void;
    onValueChange?: (values: string[]) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (values: string[]) => void;
    /** @deprecated use onValueChange */
    onChange?: (values: string[]) => void;
  };

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
  }: Props = $props();

  let selectedValues = $state<string[]>([...value]);

  $effect(() => {
    selectedValues = [...value];
  });

  function handleChange(optionValue: string, checked: boolean) {
    let newValues: string[];

    if (checked) {
      newValues = [...selectedValues, optionValue];
    } else {
      newValues = selectedValues.filter(v => v !== optionValue);
    }

    selectedValues = newValues;
    onValueInput?.(newValues);
    onValueChange?.(newValues);
    onInput?.(newValues);
    onChange?.(newValues);
  }

  function handleItemChange(optionValue: string) {
    return (event: Event & { currentTarget: HTMLInputElement }) => {
      handleChange(optionValue, event.currentTarget.checked);
    };
  }

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
          <Checkbox
            id={option.id}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            disabled={disabled || option.disabled}
            onchange={handleItemChange(option.value)}
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
