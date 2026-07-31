<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipeCodeDiff from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'language',
			type: 'select',
			options: ['javascript', 'typescript', 'python'],
			defaultValue: 'javascript'
		},
		{ name: 'showLineNumbers', type: 'boolean', defaultValue: true },
		{ name: 'preset', type: 'select', options: ['refactor', 'bugfix'], defaultValue: 'refactor' }
	];

	const refactorOriginal = `function total(items) {\n  let sum = 0;\n  for (const item of items) sum += item.price;\n  return sum;\n}`;
	const refactorModified = `function total(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}`;

	const bugfixOriginal = `function divide(a, b) {\n  return a / b;\n}`;
	const bugfixModified = `function divide(a, b) {\n  if (b === 0) throw new Error('Cannot divide by zero');\n  return a / b;\n}`;
</script>

<Story
	id="molecules-code-diff"
	title="Molecules / Information / Development / RecipeCodeDiff"
	component={RecipeCodeDiff}
	category="Molecules/Information/Development"
	description="Visual comparison between old and new code versions."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<RecipeCodeDiff
				original={args.preset === 'bugfix' ? bugfixOriginal : refactorOriginal}
				modified={args.preset === 'bugfix' ? bugfixModified : refactorModified}
				language={args.language}
				showLineNumbers={args.showLineNumbers}
			/>
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
