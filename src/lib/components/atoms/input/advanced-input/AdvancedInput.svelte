<script lang="ts">
  import type { IAdvancedInputProps } from './types';
  import { AdvancedInputStyleManager } from './styles';

  let {
    label = '',
    value = '',
    placeholder = '',
    type = 'text',
    disabled = false,
    onInput = (value: string) => {},
    class: className = ''
  }: IAdvancedInputProps = $props();

  let localValue = $state(value);

  $effect(() => {
    localValue = value;
  });

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    localValue = target.value;
    onInput(localValue);
  };
</script>

<div class={AdvancedInputStyleManager.getContainerClass(className)}>
  {#if label}
    <label class={AdvancedInputStyleManager.getLabelClass()} for="advanced-input">{label}</label>
  {/if}
  <input
    id="advanced-input"
    type={type}
    class={AdvancedInputStyleManager.getInputClass(disabled)}
    placeholder={placeholder}
    value={localValue}
    oninput={handleInput}
    disabled={disabled}
  />
</div>