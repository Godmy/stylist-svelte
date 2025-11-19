<script lang="ts">
  /**
   * @component NPMBadge
   * @description NPM statistics badge component (version, downloads, license, size)
   * 
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles NPM badge display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any NPM badge type
   * - Interface Segregation: Minimal interface via INPMBadgeProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   * 
   * Atomic Design: Atom - Basic UI element for NPM statistics display
   */

  import type { INPMBadgeProps } from './types';
  import { NPMBadgeStyleManager } from './styles';

  // Define component props using the interface
  let {
    type,
    value,
    label,
    color,
    link,
    class: className = ''
  }: INPMBadgeProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(NPMBadgeStyleManager.getBaseClasses(type, className));
  let linkWrapperClasses = $derived(NPMBadgeStyleManager.getLinkWrapperClasses());

  // Determine the label based on type if not provided
  let displayLabel = $derived(label || getLabelFromType(type));

  function getLabelFromType(type: 'version' | 'downloads' | 'license' | 'size' | 'custom'): string {
    switch (type) {
      case 'version':
        return 'Version';
      case 'downloads':
        return 'Downloads';
      case 'license':
        return 'License';
      case 'size':
        return 'Size';
      case 'custom':
        return label || 'Badge';
      default:
        return 'Badge';
    }
  }
</script>

{#if link}
  <a href={link} class={linkWrapperClasses} target="_blank" rel="noopener noreferrer">
    <span class={classes}>
      <span class="npm-badge-label font-semibold">{displayLabel}:</span>
      <span class="npm-badge-value ml-1">{value}</span>
    </span>
  </a>
{:else}
  <span class={classes}>
    <span class="npm-badge-label font-semibold">{displayLabel}:</span>
    <span class="npm-badge-value ml-1">{value}</span>
  </span>
{/if}