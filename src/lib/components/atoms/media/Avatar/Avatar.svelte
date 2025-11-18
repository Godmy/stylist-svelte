<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { IAvatarProps } from './types';
  import { AvatarStyleManager } from './styles';

  /**
   * Avatar component - A circular avatar with image or initials fallback
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles avatar rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other avatar components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param src - Image source for the avatar
   * @param alt - Alt text for the avatar image
   * @param name - Name to generate initials from
   * @param status - User status indicator (online, away, etc.)
   * @param size - Size of the avatar ('sm' | 'md' | 'lg' | 'xl')
   * @param showStatus - Whether to display the status indicator
   * @param class - Additional CSS classes
   * @returns An accessible, styled avatar element
   */
  type Props = IAvatarProps & HTMLAttributes<HTMLDivElement>;

  let {
    src,
    alt = '',
    id,
    name = '',
    status,
    size = 'md',
    showStatus = false,
    class: className = '',
    ...restProps
  }: Props = $props();

  let initials = $derived(name ? name.charAt(0).toUpperCase() : '?');
  let sizeClasses = $derived(AvatarStyleManager.getSizeClasses(size));
  let statusColor = $derived(AvatarStyleManager.getStatusClasses(status));
  let statusSizeClasses = $derived(AvatarStyleManager.getStatusSizeClasses(size));
  let classes = $derived(AvatarStyleManager.getAllClasses(size, className));
</script>

<div class={classes} {...restProps}>
  {#if src}
    <img
      src={src}
      alt={alt || name || 'Avatar'}
      class="w-full h-full object-cover rounded-full"
    />
  {:else}
    <div class="w-full h-full flex items-center justify-center">
      {initials}
    </div>
  {/if}

  {#if showStatus && status}
    <span class="{AvatarStyleManager.getStatusBorderClass()} {statusColor} {statusSizeClasses}"></span>
  {/if}
</div>
