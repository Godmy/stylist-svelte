<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    subtitle?: string;
    description?: string;
    actions?: Snippet;
    backAction?: () => void;
    backButtonLabel?: string;
    class?: string;
    titleClass?: string;
    subtitleClass?: string;
    descriptionClass?: string;
    actionsClass?: string;
    backButtonClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title,
    subtitle,
    description,
    actions,
    backAction,
    backButtonLabel = 'Back',
    class: className = '',
    titleClass = '',
    subtitleClass = '',
    descriptionClass = '',
    actionsClass = '',
    backButtonClass = '',
    ...restProps
  }: Props = $props();
</script>

<div class={`border-b border-gray-200 pb-5 ${className}`} {...restProps}>
  <div class="flex items-center justify-between">
    <div>
      <div class="flex items-center">
        {#if backAction}
          <button
            type="button"
            class={`mr-4 -ml-4 p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 ${backButtonClass}`}
            onclick={backAction}
            aria-label={backButtonLabel}
          >
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        {/if}
        <h1 class={`text-2xl font-bold text-gray-900 ${titleClass}`}>{title}</h1>
      </div>
      
      {#if subtitle}
        <p class={`mt-1 text-sm text-gray-500 ${subtitleClass}`}>{subtitle}</p>
      {/if}
    </div>
    
    {#if actions}
      <div class={`${actionsClass}`}>
        {@render actions()}
      </div>
    {/if}
  </div>
  
  {#if description}
    <p class={`mt-2 text-sm text-gray-500 ${descriptionClass}`}>{description}</p>
  {/if}
</div>



