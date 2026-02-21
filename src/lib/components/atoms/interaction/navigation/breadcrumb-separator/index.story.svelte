<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import BreadcrumbSeparator from './index.svelte';
</script>

<Story component={BreadcrumbSeparator} title="BreadcrumbSeparator" description="Separator element used between breadcrumb items.">
	{#snippet children()}
		<div class="flex items-center text-sm">
			<span>Home</span>
			<BreadcrumbSeparator />
			<span>Catalog</span>
			<BreadcrumbSeparator />
			<span class="text-[--color-text-secondary]">Item</span>
		</div>
	{/snippet}
</Story>
