<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Checkbox from '../../atoms/controls/toggles/Checkbox.svelte';

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
    onInput?: (values: string[]) => void;
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
    onInput?.(newValues);
    onChange?.(newValues);
  }

  function handleItemChange(optionValue: string) {
    return (event: Event & { currentTarget: HTMLInputElement }) => {
      handleChange(optionValue, event.currentTarget.checked);
    };
  }
</script>

<fieldset class={`checkbox-group ${hostClass}`} {...restProps}>
  {#if label}
    <legend class="block text-sm font-medium text-gray-700 mb-2">
      {label} {#if required}<span class="text-red-500">*</span>{/if}
    </legend>
  {/if}

  {#if description}
    <p class="text-sm text-gray-500 mb-3">{description}</p>
  {/if}

  <div class="space-y-3">
    {#each options as option}
      <div class={`flex items-start ${itemClass}`}>
        <div class="flex items-center h-5">
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
        <div class="ml-3 text-sm">
          <label for={option.id} class="font-medium text-gray-700">
            {option.label}
          </label>
          {#if option.description}
            <p class="text-gray-500">{option.description}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</fieldset>