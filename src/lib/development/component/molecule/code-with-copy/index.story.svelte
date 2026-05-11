<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CodeWithCopy from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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
		<div class="rounded-xl bg-gray-50 p-4">
			<CodeWithCopy
				language={args.language}
				variant={args.variant}
				showLineNumbers={args.showLineNumbers}
			>
				{#snippet children()}
					<pre class="overflow-x-auto rounded bg-gray-100 p-4 text-sm"><code>{codeContent}</code
						></pre>
				{/snippet}
			</CodeWithCopy>
		</div>
	{/snippet}
</Story>
