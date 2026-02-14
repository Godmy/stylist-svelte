<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title = '',
    description = '',
    cta = 'Learn More',
    link = '#',
    image = '',
    variant = 'primary', // 'primary', 'secondary', 'success', 'warning', 'danger'
    onCtaClick = () => {},
    class: className = ''
  } = $props<{
    title?: string;
    description?: string;
    cta?: string;
    link?: string;
    image?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    onCtaClick?: () => void;
    class?: string;
  }>();

  const variantClasses: Record<'primary' | 'secondary' | 'success' | 'warning' | 'danger', string> = {
    primary: 'bg-blue-50 border-blue-200 text-blue-800',
    secondary: 'bg-gray-50 border-gray-200 text-gray-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    danger: 'bg-red-50 border-red-200 text-red-800'
  };
</script>

<div class={`border rounded-lg p-6 flex flex-col md:flex-row items-center ${variantClasses[variant as keyof typeof variantClasses]} ${className}`}>
  <div class="md:w-2/3 mb-4 md:mb-0 md:pr-6">
    <h2 class="text-xl font-bold mb-2">{title}</h2>
    <p class="mb-4">{description}</p>
    <button
      onclick={onCtaClick}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {cta}
    </button>
  </div>
  {#if image}
    <div class="md:w-1/3 flex justify-center">
      <img src={image} alt={title} class="max-h-32 object-contain" />
    </div>
  {/if}
</div>
