<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Breadcrumbs from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'lastLabel', type: 'text', defaultValue: 'Smartphones' }
	];
</script>

<Story component={Breadcrumbs} title="Breadcrumbs" description="Ordered breadcrumb list with separators." {controls}>
	{#snippet children(values: any)}
		<Breadcrumbs
			crumbs={[
				{ label: 'Home', href: '/' },
				{ label: 'Products', href: '/products' },
				{ label: 'Electronics', href: '/products/electronics' },
				{ label: values.lastLabel }
			]}
		/>
	{/snippet}
</Story>
