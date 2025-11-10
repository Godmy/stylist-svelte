<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import InputField from './base/InputField.svelte';
  import InputGroup from './base/InputGroup.svelte';

  type Address = {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLFormElement>, 'class'>;

  type Props = RestProps & {
    class?: string;
    formClass?: string;
    fieldClass?: string;
    value?: Address;
    onInput?: (address: Address) => void;
    onChange?: (address: Address) => void;
    required?: boolean;
    disabled?: boolean;
    countryOptions?: { value: string; label: string }[];
  };

  let {
    class: hostClass = '',
    formClass = '',
    fieldClass = '',
    value = {},
    onInput,
    onChange,
    required = false,
    disabled = false,
    countryOptions = [
      { value: 'US', label: 'United States' },
      { value: 'CA', label: 'Canada' },
      { value: 'GB', label: 'United Kingdom' },
      { value: 'DE', label: 'Germany' },
      { value: 'FR', label: 'France' }
    ],
    ...restProps
  }: Props = $props();

  let address = $state<Address>({ ...value });

  $effect(() => {
    address = { ...value };
  });

  function handleFieldChange(fieldName: keyof Address, e: Event) {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    address = { ...address, [fieldName]: target.value };
    
    onInput?.(address);
    if (e.type === 'change') {
      onChange?.(address);
    }
  }

  function handleInput(fieldName: keyof Address) {
    return (e: Event) => {
      handleFieldChange(fieldName, e);
    };
  }

  function handleChange(fieldName: keyof Address) {
    return (e: Event) => {
      handleFieldChange(fieldName, e);
    };
  }
</script>

<form class={`address-form ${hostClass}`} {...restProps}>
  <div class={`grid grid-cols-1 md:grid-cols-2 gap-4 ${formClass}`}>
    <InputField
      id="street"
      label="Street Address"
      type="text"
      name="street"
      value={address.street || ''}
      required={required}
      disabled={disabled}
      oninput={handleInput('street')}
      onchange={handleChange('street')}
      class={fieldClass}
      placeholder="123 Main St"
    />

    <InputField
      id="city"
      label="City"
      type="text"
      name="city"
      value={address.city || ''}
      required={required}
      disabled={disabled}
      oninput={handleInput('city')}
      onchange={handleChange('city')}
      class={fieldClass}
      placeholder="New York"
    />

    <InputField
      id="state"
      label="State/Province"
      type="text"
      name="state"
      value={address.state || ''}
      required={required}
      disabled={disabled}
      oninput={handleInput('state')}
      onchange={handleChange('state')}
      class={fieldClass}
      placeholder="NY"
    />

    <InputField
      id="zipCode"
      label="ZIP/Postal Code"
      type="text"
      name="zipCode"
      value={address.zipCode || ''}
      required={required}
      disabled={disabled}
      oninput={handleInput('zipCode')}
      onchange={handleChange('zipCode')}
      class={fieldClass}
      placeholder="10001"
    />

    <div class={`input-group-container col-span-2 ${fieldClass}`}>
      <label for="country" class="block text-sm font-medium text-gray-700 mb-1">
        Country {#if required}<span class="text-red-500">*</span>{/if}
      </label>
      <select
        id="country"
        name="country"
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        value={address.country || ''}
        oninput={handleInput('country')}
        onchange={handleChange('country')}
        disabled={disabled}
      >
        {#each countryOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>
  </div>
</form>