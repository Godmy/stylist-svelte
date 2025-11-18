<script lang="ts">
  import { Icon } from '$lib/components/atoms';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { IAccordionIconProps } from './types';
  import { AccordionIconStyleManager } from './styles';
  import { DEFAULT_IS_OPEN, ACCORDION_DEFAULT_SIZE, ICON_NAME } from './constant';

  /**
   * AccordionIcon component - An icon that indicates accordion open/close state
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles accordion icon rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other icon components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param isOpen - Whether the accordion is open (affects rotation)
   * @param size - Size of the icon ('sm' | 'md' | 'lg')
   * @param class - Additional CSS classes
   * @returns An accessible, styled accordion icon element
   */
  type Props = IAccordionIconProps & HTMLAttributes<SVGSVGElement>;

  let {
    isOpen = DEFAULT_IS_OPEN,
    size = ACCORDION_DEFAULT_SIZE,
    class: className = ''
  }: Props = $props();

  let containerClass = $derived(AccordionIconStyleManager.getAllClasses(isOpen, className));
</script>

<span class={containerClass}>
	<Icon name={ICON_NAME} size={size} />
</span>