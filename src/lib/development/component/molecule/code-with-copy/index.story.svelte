<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CodeWithCopy from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'language',
			type: 'select',
			options: ['javascript', 'typescript', 'python', 'bash'],
			defaultValue: 'javascript'
		},
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'terminal', 'diff'],
			defaultValue: 'default'
		},
		{ name: 'showLineNumbers', type: 'boolean', defaultValue: false }
	];

	const codeContent = `npm install @stylist/svelte\n\n# then start app\nnpm run dev`;
</script>

<Story
	id="molecules-code-with-copy"
	title="Molecules / Information / Development / CodeWithCopy"
	component={CodeWithCopy}
	category="Molecules/Information/Development"
	description="Wrapper that renders custom code content and adds floating copy action."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<CodeWithCopy
				language={args.language}
				variant={args.variant}
				showLineNumbers={args.showLineNumbers}
			>
				{#snippet children()}
					<pre class="_c2"><code>{codeContent}</code></pre>
				{/snippet}
			</CodeWithCopy>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: #f9fafb;
		padding: 1rem;
	}
	._c2 {
		overflow-x: auto;
		border-radius: 0.25rem;
		background-color: #f3f4f6;
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
