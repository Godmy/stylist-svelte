<script lang="ts">
  import { ProductDemoStyleManager } from '$stylist/design-system/styles/information/product-demo';
  import type { Snippet } from 'svelte';

  let {
    title = '',
    description = '',
    demoContent,
    features = [],
    onDemo = () => {},
    class: className = ''
  } = $props<{
    title?: string;
    description?: string;
    demoContent: Snippet;
    features?: string[];
    onDemo?: () => void;
    class?: string;
  }>();
</script>

<div class={ProductDemoStyleManager.getContainerClass(className)}>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h2 class="text-2xl font-bold mb-3">{title}</h2>
      <p class="text-gray-700 mb-4">{description}</p>
      
      <ul class="mb-6 space-y-2">
        {#each features as feature}
          <li class="flex items-start">
            <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        {/each}
      </ul>
      
      <button
        onclick={onDemo}
        class="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Demo
      </button>
    </div>
    
    <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 class="font-semibold mb-3">Live Demo</h3>
      <div class="border rounded p-4 bg-gray-50 min-h-[200px]">
        {@render demoContent()}
      </div>
    </div>
  </div>
</div>