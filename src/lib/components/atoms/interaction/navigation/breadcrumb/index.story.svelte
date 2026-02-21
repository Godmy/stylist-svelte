<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Breadcrumb from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'currentPage', type: 'text', defaultValue: 'Current Page' }
	];
</script>

<Story component={Breadcrumb} title="Breadcrumb" description="Path navigation with current page indicator." {controls}>
	{#snippet children(values: any)}
		<Breadcrumb
			items={[
				{ label: 'Home', href: '/' },
				{ label: 'Products', href: '/products' },
				{ label: 'Category', href: '/products/category' },
				{ label: values.currentPage, href: '#' }
			]}
		/>
	{/snippet}
</Story>
