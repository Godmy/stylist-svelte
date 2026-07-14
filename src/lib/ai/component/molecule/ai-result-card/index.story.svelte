<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AiResultCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'AI Summary' },
		{ name: 'description', type: 'text', defaultValue: 'Detected 3 key risks and 5 action items.' },
		{ name: 'icon', type: 'text', defaultValue: '' }
	];
</script>

<Story
	component={AiResultCard}
	title="AiResultCard"
	description="Result card for AI-generated insights."
	{controls}
>
	{#snippet children(values: any)}
		<AiResultCard title={values.title} description={values.description} icon={values.icon}>
			{#snippet children()}
				<button class="_c1">View details</button>
			{/snippet}
		</AiResultCard>
	{/snippet}
</Story>

<style>
	._c1 {
		margin-top: 0.75rem;
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
