<script lang="ts">
  /**
   * Компонент BadgeGroup
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение группы бейджей
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, заданному интерфейсом IBadgeGroupProps
   * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
   * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
   *
   * Следует Atomic Design: Это молекула, состоящая из атомов (бейджей)
   */

  import type { HTMLAttributes } from 'svelte/elements';
  import { Badge } from '$lib/components/atoms/typography/elements/badge';
  import { BadgeGroupStyleManager } from './styles';
  import type { IBadgeGroupProps } from './types';

  let {
    badges = [],
    maxVisible = 5,
    showOverflow = true,
    class: className = '',
    badgeClass = '',
    overflowClass = '',
    ...restProps
  }: IBadgeGroupProps & HTMLAttributes<HTMLDivElement> = $props();

  // Get visible badges and overflow count
  let visibleBadges = $derived(badges.slice(0, maxVisible));
  let overflowCount = $derived(Math.max(0, badges.length - maxVisible));
</script>

<div class={BadgeGroupStyleManager.getContainerClasses(className)} {...restProps}>
  {#each visibleBadges as badge (badge.id)}
    <Badge
      variant={badge.variant}
      size={badge.size}
      class={badgeClass}
      onclick={() => !badge.disabled && badge.onClick && badge.onClick()}
      role="button"
      tabindex={0}
      onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && !badge.disabled && badge.onClick && badge.onClick()}
    >
      {() => badge.label}
    </Badge>
  {/each}

  {#if showOverflow && overflowCount > 0}
    <span class={BadgeGroupStyleManager.getOverflowClasses(overflowClass)}>
      +{overflowCount}
    </span>
  {/if}
</div>