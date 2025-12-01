<script lang="ts">
  import type { IActionButtonProps } from './types';
  import { ActionButtonStyleManager } from './styles';

  let {
    children,
    variant = 'default',
    size = 'md',
    disabled = false,
    class: className = ''
  }: IActionButtonProps = $props();
</script>

<button
  class={ActionButtonStyleManager.getButtonClass(variant, size, disabled, className)}
  disabled={disabled}
>
  {@render children()}
</button>