<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { MoreVertical } from 'lucide-svelte';

  type User = {
    id: string;
    name: string;
    email?: string;
    avatar?: string;
    title?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    actions?: Snippet;
    metadata?: Record<string, any>;
  };

  type Props = {
    user: User;
    showAvatar?: boolean;
    showEmail?: boolean;
    showTitle?: boolean;
    showStatus?: boolean;
    showActions?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    avatarClass?: string;
    contentClass?: string;
    statusClass?: string;
    actionsClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    user,
    showAvatar = true,
    showEmail = true,
    showTitle = true,
    showStatus = true,
    showActions = false,
    size = 'md',
    class: className = '',
    avatarClass = '',
    contentClass = '',
    statusClass = '',
    actionsClass = '',
    ...restProps
  }: Props = $props();

  // Define size classes
  let avatarSize = $state('');
  let textSize = $state('');
  let paddingClass = $state('');

  if (size === 'sm') {
    avatarSize = 'w-10 h-10';
    textSize = 'text-sm';
    paddingClass = 'p-3';
  } else if (size === 'lg') {
    avatarSize = 'w-16 h-16';
    textSize = 'text-lg';
    paddingClass = 'p-5';
  } else {
    // md (default)
    avatarSize = 'w-12 h-12';
    textSize = 'text-base';
    paddingClass = 'p-4';
  }
</script>

<div class={`c-user-card flex items-center ${paddingClass} bg-white rounded-lg shadow border border-gray-200 ${className}`} {...restProps}>
  {#if showAvatar}
    <div class="relative flex-shrink-0 mr-4">
      {#if user.avatar}
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          class={`${avatarSize} rounded-full object-cover ${avatarClass}`}
        />
      {:else}
        <div class={`${avatarSize} rounded-full bg-gray-200 flex items-center justify-center ${avatarClass}`}>
          <span class="text-gray-600 font-medium">
            {user.name ? user.name.charAt(0).toUpperCase() : '?'}
          </span>
        </div>
      {/if}

      {#if showStatus && user.status}
        <div class={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
          user.status === 'online' ? 'bg-green-500' :
          user.status === 'away' ? 'bg-yellow-500' :
          user.status === 'busy' ? 'bg-red-500' :
          'bg-gray-400'
        } ${statusClass}`}></div>
      {/if}
    </div>
  {/if}

  <div class={`flex-1 min-w-0 ${contentClass}`}>
    <div class="flex items-baseline">
      <h3 class={`font-semibold text-gray-900 truncate ${textSize}`}>
        {user.name}
      </h3>
      {#if showActions && user.actions}
        <div class={`ml-2 ${actionsClass}`}>
          {@render user.actions()}
        </div>
      {/if}
    </div>

    {#if showTitle && user.title}
      <p class={`text-gray-500 truncate ${textSize}`}>
        {user.title}
      </p>
    {/if}

    {#if showEmail && user.email}
      <p class={`text-gray-500 truncate ${textSize}`}>
        {user.email}
      </p>
    {/if}
  </div>

  {#if showActions}
    <div class="ml-4">
      {#if user.actions}
        {@render user.actions()}
      {:else}
        <button
          type="button"
          class="text-gray-400 hover:text-gray-600"
          aria-label="More options"
        >
          <MoreVertical class="h-5 w-5" />
        </button>
      {/if}
    </div>
  {/if}
</div>
