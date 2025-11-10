<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    content: Snippet;
    actions?: Snippet;
    footer?: Snippet;
    collapsible?: boolean;
    initiallyCollapsed?: boolean;
    class?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let props: Props = $props();
  
  let {
    title = props.title,
    subtitle = props.subtitle,
    content = props.content,
    actions = props.actions,
    footer = props.footer,
    collapsible = props.collapsible ?? false,
    initiallyCollapsed = props.initiallyCollapsed ?? false,
    class: className = props.class ?? '',
    headerClass = props.headerClass ?? '',
    bodyClass = props.bodyClass ?? '',
    footerClass = props.footerClass ?? '',
    ...restProps
  } = props;

  let isCollapsed = $state(initiallyCollapsed);
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  {#if title || actions}
    <div class={`flex items-center justify-between p-4 border-b ${headerClass}`}>
      <div>
        {#if title}
          <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        {/if}
        {#if subtitle}
          <p class="text-sm text-gray-500">{subtitle}</p>
        {/if}
      </div>
      <div class="flex items-center space-x-2">
        {#if actions}
          {@render actions()}
        {/if}
        {#if collapsible}
          <button
            type="button"
            class="text-gray-400 hover:text-gray-600"
            onclick={() => isCollapsed = !isCollapsed}
            aria-label={isCollapsed ? 'Expand' : 'Collapse'}
          >
            {#if isCollapsed}
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            {:else}
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            {/if}
          </button>
        {/if}
      </div>
    </div>
  {/if}

  {#if !isCollapsed}
    <div class={`p-4 ${bodyClass}`}>
      {@render content()}
    </div>

    {#if footer}
      <div class={`border-t px-4 py-3 ${footerClass}`}>
        {@render footer()}
      </div>
    {/if}
  {/if}
</div>