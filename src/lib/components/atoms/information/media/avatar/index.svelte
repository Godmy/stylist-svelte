<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  // Типы для аватара
  export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
  export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

  export type AvatarProps = {
    variant?: 'default';
    size?: AvatarSize;
    src?: string;
    alt?: string;
    id?: string;
    name?: string;
    status?: AvatarUserStatus;
    showStatus?: boolean;
    children?: any;
    class?: string;
  };

  let props: AvatarProps & HTMLAttributes<HTMLDivElement> = $props();

  const name = $derived(props.name ?? '');
  const status = $derived(props.status);
  const showStatus = $derived(props.showStatus ?? false);
  const children = $derived(props.children);

  // Вычисляем инициалы
  const initials = $derived(name ? name.charAt(0).toUpperCase() : '?');

  // Размеры для аватаров
  const SIZE_CLASSES: Record<AvatarSize, string> = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-base',
    lg: 'w-10 h-10 text-lg',
    xl: 'w-12 h-12 text-xl'
  };

  const size = $derived((props.size ?? 'md') as AvatarSize);
  const sizeClasses = $derived(SIZE_CLASSES[size]);
  const avatarClasses = $derived(
    `inline-flex items-center justify-center rounded-full bg-[var(--color-background-secondary,#f9fafb)] text-[var(--color-text-primary,#0f172a)] overflow-hidden ${sizeClasses} ${props.class ?? ''}`
  );

  // Вспомогательные функции для стилей
  function getStatusClasses(status?: AvatarUserStatus): string {
    const statusClasses: Record<AvatarUserStatus, string> = {
      online: 'bg-[var(--color-success-500,#22c55e)]',
      away: 'bg-[var(--color-warning-500,#f59e0b)]',
      offline: 'bg-[var(--color-text-secondary,#475569)]',
      typing: 'bg-[var(--color-primary-500,#3b82f6)]',
      idle: 'bg-[var(--color-warning-600,#d97706)]'
    };
    return statusClasses[status || 'offline'] || statusClasses.offline;
  }

  function getStatusSizeClasses(size: AvatarSize): string {
    const statusSizeClasses: Record<AvatarSize, string> = {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-3.5 h-3.5'
    };
    return statusSizeClasses[size];
  }

  const imageClasses = "w-full h-full object-cover rounded-full";
  const fallbackClasses = "w-full h-full flex items-center justify-center";
  const statusColor = $derived(getStatusClasses(status));
  const statusSizeClasses = $derived(getStatusSizeClasses(size));
  const statusIndicatorClasses = $derived(`absolute bottom-0 right-0 rounded-full border-2 border-[var(--color-background-primary,#ffffff)] ${statusColor} ${statusSizeClasses}`);

  // Создаем отдельную переменную для DOM-атрибутов, чтобы избежать конфликта с $props()
  const { src, alt, id, name: propName, status: propStatus, showStatus: propShowStatus, children: propChildren, class: propClass, ...domProps } = props;
</script>

<div
  {...domProps}
  class={avatarClasses}
>
  {#if src}
    <img
      src={src}
      alt={alt || name || 'Avatar'}
      class={imageClasses}
    />
  {:else}
    <div class={fallbackClasses}>
      {initials}
    </div>
  {/if}

  {#if showStatus && status}
    <span class={statusIndicatorClasses}></span>
  {/if}
</div>