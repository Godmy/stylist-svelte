<script lang="ts">
  import { Slash } from 'lucide-svelte';
  import type { IBreadcrumbsProps } from '$stylist/design-system/presets/interaction/interaction-presets';
  import { BreadcrumbsStyleManager } from '$stylist/design-system/presets/interaction/interaction-presets';

  let { crumbs }: IBreadcrumbsProps = $props();

  // Подсчитываем количество крошек для правильного отображения сепараторов
  const totalCrumbs = $derived(crumbs?.length || 0);
</script>

<!--
  Компонент Breadcrumbs реализует принципы SOLID следующим образом:
  - SRP (Single Responsibility Principle): Компонент отвечает только за отображение навигационной цепочки
  - OCP (Open/Closed Principle): Легко расширяем через пропсы
  - LSP (Liskov Substitution Principle): Подчиняется контракту навигации
  - ISP (Interface Segregation Principle): Использует минимально необходимый интерфейс IBreadcrumbsProps
  - DIP (Dependency Inversion Principle): Зависит от абстракций (типов и стилей), а не от конкретных реализаций
-->
<nav aria-label="Breadcrumb">
  <ol class={BreadcrumbsStyleManager.getListClasses()}>
    {#each crumbs as crumb, i}
      <li class={BreadcrumbsStyleManager.getItemClasses()}>
        {#if i > 0}
          <Slash class={BreadcrumbsStyleManager.getSeparatorClasses()} />
        {/if}
        {#if crumb.href && i < totalCrumbs - 1}
          <a href={crumb.href} class={BreadcrumbsStyleManager.getActiveLinkClasses()}>
            {crumb.label}
          </a>
        {:else}
          <span class={BreadcrumbsStyleManager.getCurrentItemClasses()}>{crumb.label}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

