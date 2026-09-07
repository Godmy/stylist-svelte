<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Code from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'code',
			type: 'text',
			defaultValue: 'function hello(name) {\n  return `Hello, ${name}`;\n}\n\nhello("World");'
		},
		{
			name: 'language',
			type: 'select',
			options: ['javascript', 'typescript', 'python', 'json', 'bash'],
			defaultValue: 'javascript'
		},
		{ name: 'showLineNumbers', type: 'boolean', defaultValue: false },
		{ name: 'copyable', type: 'boolean', defaultValue: true },
		{ name: 'copyOnHover', type: 'boolean', defaultValue: false },
		{ name: 'title', type: 'text', defaultValue: 'Example snippet' }
	];
</script>

<Story
	id="molecules-code-block"
	title="Molecules / Information / Development / Code"
	component={Code}
	category="Molecules/Information/Development"
	description="General code renderer with optional title, line numbers and copy action."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<Code
				code={args.code}
				language={args.language}
				showLineNumbers={args.showLineNumbers}
				copyable={args.copyable}
				copyOnHover={args.copyOnHover}
				title={args.title}
			/>
			<Code
				code={`const endpoint = '/api/orders';\nfetch(endpoint);`}
				language="javascript"
				title="Secondary preview"
				tags={['api', 'fetch']}
				copyable
				copyOnHover
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
	._c1 > * + * {
		margin-top: 1rem;
	}
</style>
