<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Breadcrumbs from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



