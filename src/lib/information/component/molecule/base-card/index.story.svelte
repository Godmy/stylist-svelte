<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import BaseCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Workspace Summary' },
		{ name: 'description', type: 'text', defaultValue: 'All systems operational for the current release.' }
	];
</script>

<Story component={BaseCard} title="BaseCard" description="Generic information card with header and body slots." {controls}>
	{#snippet children(values: any)}
		<BaseCard title={values.title} description={values.description}>
			{#snippet children()}
				<div class="text-sm text-[--color-text-secondary]">Body content can contain any custom UI.</div>
			{/snippet}
		</BaseCard>
	{/snippet}
</Story>



