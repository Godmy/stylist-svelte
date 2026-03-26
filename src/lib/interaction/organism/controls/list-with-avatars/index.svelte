<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

  type ListItem = {
    id: string;
    title: string;
    subtitle?: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    description?: string;
    actions?: Array<{
      label: string;
      onClick: () => void;
      variant?: 'primary' | 'secondary' | 'danger';
    }>;
  };

  type Props = {
    items: ListItem[];
    showAvatar?: boolean;
    showStatus?: boolean;
    showSubtitle?: boolean;
    showDescription?: boolean;
    showActions?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    itemClass?: string;
    avatarClass?: string;
    contentClass?: string;
    actionsClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let {
    items = [],
    showAvatar = true,
    showStatus = true,
    showSubtitle = true,
    showDescription = true,
    showActions = false,
    size = 'md',
    class: className = '',
    itemClass = '',
    avatarClass = '',
    contentClass = '',
    actionsClass = '',
    ...restProps
  } = $props();

  // Define size classes
  let avatarSize = $state('');
  let paddingClass = $state('');
  let textSize = $state('');

  if (size === 'sm') {
    avatarSize = 'w-8 h-8';
    paddingClass = 'py-2';
    textSize = 'text-sm';
  } else if (size === 'lg') {
    avatarSize = 'w-12 h-12';
    paddingClass = 'py-4';
    textSize = 'text-lg';
  } else {
    // md (default)
    avatarSize = 'w-10 h-10';
    paddingClass = 'py-3';
    textSize = 'text-base';
  }
</script>

<div class={`c-list-with-avatars divide-y divide-gray-200 rounded-md border border-[var(--color-border-primary)] ${className}`} {...restProps}>
  {#each items as item}
    <div class={`flex items-center ${paddingClass} px-4 ${itemClass}`}>
      {#if showAvatar}
        <div class="relative flex-shrink-0 mr-3">
          {#if item.avatar}
            <img
              src={item.avatar}
              alt={`${item.title}'s avatar`}
              class={`${avatarSize} rounded-full object-cover ${avatarClass}`}
            />
          {:else}
            <div class={`${avatarSize} rounded-full bg-[var(--color-background-tertiary)] flex items-center justify-center ${avatarClass}`}>
              <span class="text-[var(--color-text-secondary)] font-medium">
                {item.title ? item.title.charAt(0).toUpperCase() : '?'}
              </span>
            </div>
          {/if}

          {#if showStatus && item.status}
            <div class={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-[var(--color-background-primary)] ${
              item.status === 'online' ? 'bg-[var(--color-success-500)]' :
              item.status === 'away' ? 'bg-yellow-500' :
              item.status === 'busy' ? 'bg-[var(--color-danger-500)]' :
              'bg-[var(--color-neutral-400)]'
            }`}></div>
          {/if}
        </div>
      {/if}

      <div class={`flex-1 min-w-0 ${contentClass}`}>
        <p class={`font-medium text-[var(--color-text-primary)] truncate ${textSize}`}>
          {item.title}
        </p>

        {#if showSubtitle && item.subtitle}
          <p class={`text-[var(--color-text-secondary)] truncate ${textSize}`}>
            {item.subtitle}
          </p>
        {/if}

        {#if showDescription && item.description}
          <p class={`text-[var(--color-text-tertiary)] truncate ${textSize}`}>
            {item.description}
          </p>
        {/if}
      </div>

      {#if showActions && item.actions && item.actions.length > 0}
        <div class={`ml-4 flex space-x-2 ${actionsClass}`}>
          {#each item.actions as action}
            <button
              type="button"
              class={`px-3 py-1 rounded text-xs font-medium ${
                action.variant === 'primary' ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] hover:bg-[var(--color-primary-200)]' :
                action.variant === 'danger' ? 'bg-[var(--color-danger-100)] text-[var(--color-danger-700)] hover:bg-[var(--color-danger-200)]' :
                'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
              }`}
              onclick={action.onClick}
            >
              {action.label}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>




