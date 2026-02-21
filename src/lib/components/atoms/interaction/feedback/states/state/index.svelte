<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Inbox, Plus } from 'lucide-svelte';

  /**
   * Компонент пустого состояния
   * Приоритет: если передан `children`, он будет отображен,
   * иначе используется `icon` проп, если он передан,
   * иначе используется иконка по умолчанию
   */
  type Props = {
    title: string;
    description?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
    class?: string;
    icon?: Snippet; // Add icon prop
    children?: Snippet;
  };

  let { title, description, action, class: className = '', icon, children }: Props = $props();
</script>

<div class="text-center py-12 {className}">
  <!-- Custom icon slot or default icon -->
  {#if children}
    {@render children?.()}
  {:else if icon}
    {@render icon()}
  {:else}
    <Inbox class="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
  {/if}

  <h3 class="mt-2 text-sm font-medium text-gray-900">{title}</h3>
  {#if description}
    <p class="mt-1 text-sm text-gray-500 max-w-md mx-auto">{description}</p>
  {/if}
  {#if action}
    <div class="mt-6">
      <button
        type="button"
        onclick={action.onClick}
        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Plus class="-ml-1 mr-2 h-5 w-5" />
        {action.label}
      </button>
    </div>
  {/if}
</div>



