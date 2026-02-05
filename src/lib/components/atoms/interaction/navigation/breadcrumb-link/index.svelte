<script lang="ts">
  /**
   * Компонент BreadcrumbLink
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение элемента навигационной цепочки
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, заданному интерфейсом IBreadcrumbLinkProps
   * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
   * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
   *
   * Следует Atomic Design: Это молекула, являющаяся часть навигационной цепочки
   */

  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { BreadcrumbLinkStyleManager } from '$stylist/design-system/presets/interaction/interaction-presets';
  import type { IBreadcrumbLinkProps } from '$stylist/design-system/attributes';

  let {
    current = false,
    href,
    children,
    ...restProps
  }: IBreadcrumbLinkProps = $props();
</script>

{#if current}
  <span class={BreadcrumbLinkStyleManager.getLinkClasses(current)} {...restProps}>
    {@render children?.()}
  </span>
{:else}
  <a href={href} class={BreadcrumbLinkStyleManager.getLinkClasses(current)} {...restProps}>
    {@render children?.()}
  </a>
{/if}
