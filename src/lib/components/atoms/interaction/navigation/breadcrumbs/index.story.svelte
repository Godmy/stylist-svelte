<script>
	import Breadcrumbs from './breadcrumbs/index.svelte';

	// Определение данных для примера
	let crumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Products', href: '/products' },
		{ label: 'Electronics', href: '/products/electronics' },
		{ label: 'Smartphones' }
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Breadcrumbs Component</h1>
	<div class="rounded border p-4">
		<Breadcrumbs {crumbs} />
	</div>
</div>
