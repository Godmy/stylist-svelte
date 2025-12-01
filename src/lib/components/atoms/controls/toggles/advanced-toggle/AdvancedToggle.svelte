<script lang="ts">
  import type { IAdvancedToggleProps } from './types';
  import { AdvancedToggleStyleManager } from './styles';

  let {
    label = '',
    checked = false,
    disabled = false,
    onChange = (value: boolean) => {},
    class: className = ''
  }: IAdvancedToggleProps = $props();

  let localChecked = $state(checked);

  $effect(() => {
    localChecked = checked;
  });

  const handleChange = () => {
    if (!disabled) {
      localChecked = !localChecked;
      onChange(localChecked);
    }
  };
</script>

<div class={AdvancedToggleStyleManager.getContainerClass(className)}>
  <label class={AdvancedToggleStyleManager.getLabelWrapperClass()}>
    <div class={AdvancedToggleStyleManager.getToggleContainerClass()}>
      <input
        type="checkbox"
        class={AdvancedToggleStyleManager.getHiddenInputClass()}
        bind:checked={localChecked}
        disabled={disabled}
        onchange={handleChange}
      />
      <div class={AdvancedToggleStyleManager.getToggleBackgroundClass(localChecked)}></div>
      <div class={AdvancedToggleStyleManager.getToggleHandleClass(localChecked)}></div>
    </div>
    <span class={AdvancedToggleStyleManager.getLabelTextClass(disabled)}>{label}</span>
  </label>
</div>