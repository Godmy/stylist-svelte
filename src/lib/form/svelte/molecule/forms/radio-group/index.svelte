<script lang="ts">
  import { createRadioGroupState } from '$stylist/form/function/state/radio-group';
  import type { RadioGroupProps } from '$stylist/form/type/struct/radio-group';

  const props: RadioGroupProps = $props();
  const state = createRadioGroupState(props);
</script>

<fieldset class="{state.rootClass} {props.class ?? ''}">
  {#if props.label}
    <legend class={state.labelClass}>
      {props.label}
      {#if props.required}
        <span class={state.requiredMarkClass} aria-hidden="true">*</span>
      {/if}
    </legend>
  {/if}

  {#if props.description}
    <p class={state.descriptionClass}>{props.description}</p>
  {/if}

  <div class={state.optionsContainerClass}>
    {#each props.options as option (option.value)}
      {@const isChecked = props.value === option.value}
      <label
        class="{state.optionLabelClass} {isChecked ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : ''}"
      >
        <span class="mt-1">
          <span class="relative inline-flex h-4 w-4 items-center justify-center">
            <input
              type="radio"
              class={state.inputClass}
              name={props.name}
              value={option.value}
              bind:group={props.value}
              disabled={props.disabled || option.disabled}
              required={props.required}
            />
            <span
              class={state.indicatorClass}
              aria-hidden="true"
            ></span>
          </span>
        </span>

        <span class="flex flex-col">
          <span class={state.optionTextClass}>
            {option.label}
          </span>
          {#if option.description}
            <span class={state.optionDescriptionClass}>{option.description}</span>
          {/if}
        </span>
      </label>
    {/each}
  </div>

  {#if props.error}
    <p class={state.errorClass}>{props.error}</p>
  {/if}
</fieldset>




