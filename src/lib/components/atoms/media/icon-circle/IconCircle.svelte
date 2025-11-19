<script lang="ts">
  /**
   * @component IconCircle
   * @description Icon in a colored circle for feature cards
   * 
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles circular icon display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any icon in a circle
   * - Interface Segregation: Minimal interface via IIconCircleProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   * 
   * Atomic Design: Atom - Basic UI element for circular icon display
   */

  import type { IIconCircleProps } from './types';
  import { IconCircleStyleManager } from './styles';

  // Define component props using the interface
  let {
    icon,
    variant = 'primary',
    size = 'md',
    gradient = false,
    class: className = ''
  }: IIconCircleProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(IconCircleStyleManager.getBaseClasses(variant, size, gradient, className));
</script>

<div class={classes}>
  <!-- Using a generic approach to display the icon. 
       In a real implementation, this would connect to an icon library -->
  {icon}
</div>