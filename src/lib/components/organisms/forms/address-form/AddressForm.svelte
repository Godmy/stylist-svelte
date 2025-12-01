<script lang="ts">
  import type { IAddressFormProps, Address, CountryOption } from './types';
  import { AddressFormStyleManager } from './styles';
  import InputField from '../../../molecules/forms/base/InputField.svelte';

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
  }: IAddressFormProps = $props();

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

<form class={AddressFormStyleManager.getContainerClass(hostClass)} {...restProps}>
  <div class={AddressFormStyleManager.getFormGridClass(formClass)}>
    <div class={AddressFormStyleManager.getFieldContainerClass(fieldClass)}>
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
        class=""
        placeholder="123 Main St"
      />
    </div>

    <div class={AddressFormStyleManager.getFieldContainerClass(fieldClass)}>
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
        class=""
        placeholder="New York"
      />
    </div>

    <div class={AddressFormStyleManager.getFieldContainerClass(fieldClass)}>
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
        class=""
        placeholder="NY"
      />
    </div>

    <div class={AddressFormStyleManager.getFieldContainerClass(fieldClass)}>
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
        class=""
        placeholder="10001"
      />
    </div>

    <div class={AddressFormStyleManager.getCountryFieldContainerClass(fieldClass)}>
      <label for="country" class={AddressFormStyleManager.getLabelClass(required)}>
        Country
      </label>
      <select
        id="country"
        name="country"
        class={AddressFormStyleManager.getSelectClass(disabled)}
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