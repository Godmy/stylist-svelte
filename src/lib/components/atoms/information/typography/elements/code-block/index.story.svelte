<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import CodeBlock from './index.svelte';

	const variantOptions = ['default', 'terminal', 'diff'];
	const sizeOptions = ['sm', 'md', 'lg'];

	const controls: ControlConfig[] = [
		{
			name: 'language',
			type: 'text',
			defaultValue: 'javascript'
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'default',
			options: variantOptions
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: sizeOptions
		},
		{
			name: 'showLineNumbers',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'startLineNumber',
			type: 'number',
			defaultValue: 1,
			min: 1
		}
	];
</script>

<Story
	id="atoms-code-block"
	title="CodeBlock"
	component={CodeBlock}
	category="Atoms"
	description="CodeBlock component for displaying formatted code blocks."
	tags={['code', 'syntax', 'highlighting', 'block']}
	{controls}
>
	{#snippet children(values: any)}
		{@const startLine = Number(values.startLineNumber)}
		<CodeBlock
			language={values.language as string ?? 'javascript'}
			variant={values.variant as 'default' | 'terminal' | 'diff' ?? 'default'}
			size={values.size as 'sm' | 'md' | 'lg' ?? 'md'}
			showLineNumbers={values.showLineNumbers as boolean ?? false}
			startLineNumber={Number.isNaN(startLine) ? 1 : startLine}
		>
			{`function example() {
  console.log("This is an example code block");
  return true;
}`}
		</CodeBlock>
	{/snippet}
</Story>

