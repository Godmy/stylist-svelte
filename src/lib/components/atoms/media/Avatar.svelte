<script lang="ts">
  type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
  type UserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

  type Props = {
    src?: string;
    alt?: string;
    id?: string;
    name?: string;
    status?: UserStatus;
    size?: AvatarSize;
    showStatus?: boolean;
    class?: string;
  };

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
  }: Props = $props();

  let initials = $derived(name ? name.charAt(0).toUpperCase() : '?');
  let statusColor = $derived({
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400',
    typing: 'bg-blue-500',
    idle: 'bg-orange-500'
  }[status || 'offline']);

  let sizeClasses = $derived({
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  }[size]);

  let statusSizeClasses = $derived({
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5'
  }[size]);

  let classes = $derived(`inline-flex items-center justify-center rounded-full bg-gray-200 font-medium text-gray-700 ${sizeClasses} ${className}`);
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
      {name ? name.charAt(0).toUpperCase() : '?'}
    </div>
  {/if}
  
  {#if showStatus && status}
    <span class="absolute bottom-0 right-0 rounded-full border-2 border-white {statusColor} {statusSizeClasses}"></span>
  {/if}
</div>
