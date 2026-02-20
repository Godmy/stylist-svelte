<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import CodeBlock from './index.svelte';

	type CodeBlockStoryProps = {
		language: string;
		variant: 'default' | 'terminal' | 'diff';
		size: 'sm' | 'md' | 'lg';
		showLineNumbers: boolean;
		startLineNumber: number;
	};

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
	{#snippet children(props)}
		<CodeBlock
			language={props.language as string ?? 'javascript'}
			variant={props.variant as 'default' | 'terminal' | 'diff' ?? 'default'}
			size={props.size as 'sm' | 'md' | 'lg' ?? 'md'}
			showLineNumbers={props.showLineNumbers as boolean ?? false}
			startLineNumber={props.startLineNumber as number ?? 1}
		>
			{`function example() {
  console.log("This is an example code block");
  return true;
}`}
		</CodeBlock>
	{/snippet}
</Story>

