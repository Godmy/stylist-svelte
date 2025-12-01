<script lang="ts">
  let {
    plans = [],
    className = ''
  } = $props<{
    plans: Array<{
      name: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      highlighted?: boolean;
    }>;
    className?: string;
  }>();
</script>

<div class={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
  {#each plans as plan, i}
    <div class={`border rounded-lg p-6 ${
      plan.highlighted 
        ? 'border-blue-500 bg-blue-50 transform scale-105 z-10 relative shadow-lg' 
        : 'border-gray-200'
    }`}>
      {#if plan.highlighted}
        <div class="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
          MOST POPULAR
        </div>
      {/if}
      <h3 class="text-xl font-bold mb-2">{plan.name}</h3>
      <div class="mb-4">
        <span class="text-3xl font-bold">{plan.price}</span>
        <span class="text-gray-600">/{plan.period}</span>
      </div>
      <ul class="mb-6 space-y-2">
        {#each plan.features as feature}
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        {/each}
      </ul>
      <button class={`w-full py-3 rounded-lg font-medium ${
        plan.highlighted 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}>
        {plan.cta}
      </button>
    </div>
  {/each}
</div>