<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CodeWithLineNumbers from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'language',
			type: 'select',
			options: ['javascript', 'typescript', 'python', 'json'],
			defaultValue: 'typescript'
		},
		{ name: 'title', type: 'text', defaultValue: 'Typed utility' },
		{ name: 'copyable', type: 'boolean', defaultValue: true },
		{ name: 'highlightLines', type: 'text', defaultValue: '2,3' }
	];

	const code = `type User = {\n  id: string;\n  email: string;\n};\n\nexport function formatUser(user: User) {\n  return \`\${user.id} - \${user.email}\`;\n}`;

	function parseLines(value: string): number[] {
		return value
			.split(',')
			.map((part) => Number(part.trim()))
			.filter((part) => !Number.isNaN(part) && part > 0);
	}
</script>

<Story
	id="molecules-code-block-with-line-numbers"
	title="Molecules / Information / Development / CodeWithLineNumbers"
	component={CodeWithLineNumbers}
	category="Molecules/Information/Development"
	description="Legacy wrapper over Code with line numbers always enabled."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<CodeWithLineNumbers
				{code}
				language={args.language}
				title={args.title}
				copyable={args.copyable}
				highlightLines={parseLines(args.highlightLines)}
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
