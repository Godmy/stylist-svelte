<script lang="ts">
	import BreadcrumbLink from './index.svelte';
</script>

<svelte:head>
	<title>BreadcrumbLink Story</title>
</svelte:head>

<div class="p-4">
	<h1 class="mb-4 text-xl font-bold">BreadcrumbLink Component</h1>

	<h2 class="mb-2 text-lg font-semibold">Default Link</h2>
	<BreadcrumbLink href="/products" class="text-blue-600 hover:underline">Products</BreadcrumbLink>

	<h2 class="mt-4 mb-2 text-lg font-semibold">Current Page Link</h2>
	<BreadcrumbLink current={true}>Current Page</BreadcrumbLink>

	<h2 class="mt-4 mb-2 text-lg font-semibold">With Children Snippet</h2>
	<BreadcrumbLink href="/about">About Us</BreadcrumbLink>
</div>
