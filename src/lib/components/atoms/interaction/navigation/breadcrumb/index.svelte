<script lang="ts">
  /**
   * Компонент Breadcrumb
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение навигационной цепочки
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, заданному интерфейсом IBreadcrumbProps
   * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
   * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
   *
   * Следует Atomic Design: Это молекула, состоящая из атомов (ссылок)
   */

  import { ChevronRight } from 'lucide-svelte';
  import { BreadcrumbStyleManager } from '$stylist/design-system/interaction/navigation/breadcrumb';
  import type { IBreadcrumbProps } from '$stylist/design-system/interaction/navigation/breadcrumb';

  let { items, class: className = '' }: IBreadcrumbProps = $props();
</script>

<nav aria-label="Breadcrumb" class={BreadcrumbStyleManager.getContainerClasses(className)}>
  {#each items as item, i}
    <div class={BreadcrumbStyleManager.getItemClasses(i === items.length - 1)}>
      {#if i > 0}
        <ChevronRight class={BreadcrumbStyleManager.getSeparatorClasses()} aria-hidden="true" />
      {/if}
      <a
        href={item.href}
        class={BreadcrumbStyleManager.getLinkClasses(i === items.length - 1)}
        aria-current={i === items.length - 1 ? 'page' : undefined}
      >
        {item.label}
      </a>
    </div>
  {/each}
</nav>

