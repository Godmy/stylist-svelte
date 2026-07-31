<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CopyableCode from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'language',
			type: 'select',
			options: ['javascript', 'typescript', 'python', 'json', 'bash'],
			defaultValue: 'javascript'
		},
		{ name: 'title', type: 'text', defaultValue: 'Install example' },
		{
			name: 'code',
			type: 'text',
			defaultValue: 'npm install stylist-svelte\n\n# run locally\nyarn dev'
		}
	];
</script>

<Story
	id="molecules-copyable-code-block"
	title="Molecules / Information / Development / CopyableCode"
	component={CopyableCode}
	category="Molecules/Information/Development"
	description="Legacy wrapper around Code with copy action enabled."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<CopyableCode code={args.code} language={args.language} title={args.title} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: #f9fafb;
		padding: 1rem;
	}
</style>
