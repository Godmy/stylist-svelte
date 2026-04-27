<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DownloadCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'productName', type: 'text', defaultValue: 'Product Brochure' },
		{ name: 'currentPrice', type: 'number', defaultValue: 0, min: 0, max: 1000, step: 1 }
	];
</script>

<Story component={DownloadCard} title="DownloadCard" description="Download action card for files and resources." {controls}>
	{#snippet children(values: any)}
		<DownloadCard
			file={{ name: values.productName + '.pdf', size: 2457600, type: 'PDF', date: '2026-02-21' }}
			downloadUrl="#"
			variant="primary"
		/>
	{/snippet}
</Story>



