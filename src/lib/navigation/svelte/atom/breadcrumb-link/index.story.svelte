<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import BreadcrumbLink from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Products' },
		{ name: 'href', type: 'text', defaultValue: '/products' },
		{ name: 'current', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={BreadcrumbLink} title="BreadcrumbLink" description="Single link or current text node in breadcrumb chains." {controls}>
	{#snippet children(values: any)}
		<div class="flex items-center gap-2 text-sm">
			<BreadcrumbLink href={values.href} current={values.current}>{values.label}</BreadcrumbLink>
		</div>
	{/snippet}
</Story>



