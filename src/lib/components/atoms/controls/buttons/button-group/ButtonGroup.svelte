<script lang="ts">
  /**
   * Компонент ButtonGroup
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за группировку кнопок
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, заданному интерфейсом IButtonGroupProps
   * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
   * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
   *
   * Следует Atomic Design: Это молекула, объединяющая кнопки (атомы)
   */

  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ButtonGroupStyleManager } from './styles';
  import type { IButtonGroupProps } from './types';

  let {
    size = 'md',
    variant = 'primary',
    orientation = 'horizontal',
    fullWidth = false,
    children,
    ...restProps
  }: IButtonGroupProps = $props();
</script>

<div class={ButtonGroupStyleManager.getContainerClasses(orientation, fullWidth)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>