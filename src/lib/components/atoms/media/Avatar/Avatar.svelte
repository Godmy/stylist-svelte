<script lang="ts">
  import type { AvatarProps } from './type';
  import { getInitials, getStatusColor, getAvatarSizeClasses, getStatusSizeClasses } from './util';
  import { DEFAULT_AVATAR_CLASSES, STATUS_BORDER_CLASSES } from './constant';

  let {
    src,
    alt,
    id,
    name,
    status,
    size = 'md',
    showStatus = false,
    class: className = '',
    ...restProps
  }: AvatarProps = $props();

  let initials = $derived(getInitials(name));
  let statusColor = $derived(getStatusColor(status));
  let sizeClasses = $derived(getAvatarSizeClasses(size));
  let statusSizeClasses = $derived(getStatusSizeClasses(size));
  let classes = $derived(`${DEFAULT_AVATAR_CLASSES} ${sizeClasses} ${className}`);
</script>

<div class={classes} {...restProps}>
  {#if src}
    <img
      src={src}
      alt={alt || name || ''}
      class="w-full h-full object-cover rounded-full"
    />
  {:else}
    <div class="w-full h-full flex items-center justify-center">
      {initials}
    </div>
  {/if}

  {#if showStatus && status}
    <span class="{STATUS_BORDER_CLASSES} {statusColor} {statusSizeClasses}"></span>
  {/if}
</div>
