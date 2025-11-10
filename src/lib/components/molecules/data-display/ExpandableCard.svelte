<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronDown } from 'lucide-svelte';

  type Props = {
    title: string;
    subtitle?: string;
    summary: Snippet;
    details: Snippet;
    defaultExpanded?: boolean;
    disabled?: boolean;
    class?: string;
    headerClass?: string;
    summaryClass?: string;
    detailsClass?: string;
    chevronClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title,
    subtitle,
    summary,
    details,
    defaultExpanded = false,
    disabled = false,
    class: className = '',
    headerClass = '',
    summaryClass = '',
    detailsClass = '',
    chevronClass = '',
    ...restProps
  }: Props = $props();

  let isExpanded = $state(defaultExpanded);

  function toggleExpanded() {
    if (!disabled) {
      isExpanded = !isExpanded;
    }
  }
</script>

<div class={`border rounded-lg shadow-sm overflow-hidden ${className}`} {...restProps}>
  <button
    class={`w-full flex justify-between items-center p-4 text-left ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
    } ${headerClass}`}
    onclick={toggleExpanded}
    aria-expanded={isExpanded}
    aria-controls="expandable-card-content"
    disabled={disabled}
  >
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-gray-900">{title}</h3>
      {#if subtitle}
        <p class="text-sm text-gray-500">{subtitle}</p>
      {/if}
      <div class={`mt-2 ${summaryClass}`}>
        {@render summary()}
      </div>
    </div>
    
    <ChevronDown
      class={`ml-4 h-5 w-5 text-gray-500 transition-transform duration-200 ${
        isExpanded ? 'rotate-180' : ''
      } ${chevronClass}`}
    />
  </button>
  
  <div
    id="expandable-card-content"
    class={`overflow-hidden transition-all duration-300 ease-in-out ${
      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <div class={`p-4 border-t border-gray-200 ${detailsClass}`}>
      {@render details()}
    </div>
  </div>
</div>