<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Palette = 'palette';


  type RestProps = Omit<InteractionHTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;

  type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    pickerClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    onValueInput?: (value: string, event?: Event) => void;
    onValueChange?: (value: string, event?: Event) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string, event?: Event) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string, event?: Event) => void;
  };

  let {
    value = 'var(--color-text-primary)',
    class: hostClass = '',
    inputClass = '',
    pickerClass = '',
    label,
    helperText,
    error,
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedColor = $state(value);

  $effect(() => {
    selectedColor = value;
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedColor = target.value;
    onValueInput?.(selectedColor, event);
    onValueChange?.(selectedColor, event);
    onInput?.(selectedColor, event);
  }

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedColor = target.value;
    onValueChange?.(selectedColor, event);
    onChange?.(selectedColor, event);
  }
</script>

<div class={`color-picker-container ${hostClass}`}>
  <div class="flex items-center gap-3">
    <label for="color-picker-input" class="block text-sm font-medium text-[var(--color-text-primary)]">
      {label || 'Color'}
    </label>
    <div class="flex items-center gap-2">
      <div
        class={`w-8 h-8 rounded-md border border-[var(--color-border-primary)] ${pickerClass}`}
        style={`background-color: ${selectedColor};`}
        role="button"
        tabindex="0"
        aria-label={`Select color, current value is ${selectedColor}`}
      >
        <input
          id="color-picker-input"
          type="color"
          class={`w-8 h-8 opacity-[var(--opacity-0)] cursor-pointer ${inputClass}`}
          value={selectedColor}
          oninput={handleInput}
          onchange={handleChange}
          {...restProps}
        />
      </div>
      <input
        type="text"
        class={`w-24 px-3 py-1 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] text-sm ${inputClass}`}
        value={selectedColor}
        oninput={handleInput}
        onchange={handleChange}
        {...restProps}
      />
    </div>
  </div>

  {#if helperText}
    <p class="mt-1 text-xs text-[var(--color-text-secondary)]">{helperText}</p>
  {/if}

  {#if error}
    <p class="mt-1 text-xs text-[var(--color-danger-600)]">{error}</p>
  {/if}
</div>





