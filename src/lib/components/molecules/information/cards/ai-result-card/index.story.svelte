<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import AiResultCard from './index.svelte';

	const controls: ControlConfig[] = [
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
