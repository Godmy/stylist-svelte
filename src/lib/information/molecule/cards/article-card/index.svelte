<script lang="ts">
  let {
    title = '',
    subtitle = '',
    image = '',
    actions = [],
    class: className = ''
  } = $props<{
    title?: string;
    subtitle?: string;
    image?: string;
    actions?: Array<{label: string, onClick: () => void}>;
    class?: string;
  }>();
</script>

<div class={`max-w-sm bg-[var(--color-background-primary)] rounded-lg shadow-md overflow-hidden ${className}`}>
  {#if image}
    <img src={image} alt={title} class="w-full h-48 object-cover" />
  {/if}
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">{title}</h3>
    {#if subtitle}
      <p class="text-[var(--color-text-secondary)] mb-4">{subtitle}</p>
    {/if}
    <div class="flex space-x-2">
      {#each actions as action, i}
        <button
          onclick={action.onClick}
          class="px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-600)]"
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>



