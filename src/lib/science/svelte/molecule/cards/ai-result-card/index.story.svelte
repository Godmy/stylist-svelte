<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import AiResultCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'AI Summary' },
		{ name: 'description', type: 'text', defaultValue: 'Detected 3 key risks and 5 action items.' },
		{ name: 'icon', type: 'text', defaultValue: '' }
	];
</script>

<Story component={AiResultCard} title="AiResultCard" description="Result card for AI-generated insights." {controls}>
	{#snippet children(values: any)}
		<AiResultCard title={values.title} description={values.description} icon={values.icon}>
			{#snippet children()}
				<button class="mt-3 rounded-md border border-[--color-border-primary] px-3 py-1 text-sm">View details</button>
			{/snippet}
		</AiResultCard>
	{/snippet}
</Story>



