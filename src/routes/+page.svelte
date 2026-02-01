<script lang="ts">
  import pkg from '../../package.json';

  const title = pkg.name || 'Stylist Svelte UI';
  const version = pkg.version || '';
  const description = pkg.description || 'A Svelte UI component library.';
</script>

<main class="min-h-screen flex flex-col items-center justify-center gap-4 text-center text-gray-700">
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl font-semibold">{title}</h1>
    {#if version}
      <p class="text-sm text-gray-500">v{version}</p>
    {/if}
  </div>
  <p class="max-w-xl text-base text-gray-600">
    {description}
  </p>
</main>
