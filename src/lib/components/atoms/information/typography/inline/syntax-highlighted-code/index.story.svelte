<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import SyntaxHighlightedCode from './index.svelte';

	type Props = {
		code?: string;
		language?: 'javascript' | 'typescript' | 'html' | 'css' | 'json' | 'python' | 'svelte';
		showLineNumbers?: boolean;
	};

	const sampleCode = `function greet(name) {
  console.log('Hello, ' + name + '!');

  return {
    message: 'Welcome to our app',
    timestamp: new Date().toISOString()
  };
}`;

	const controls: ControlConfig[] = [
		{
			name: 'language',
			type: 'select',
			options: ['javascript', 'typescript', 'html', 'css', 'json', 'python', 'svelte'],
			defaultValue: 'javascript'
		},
		{
			name: 'showLineNumbers',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="molecules-syntax-highlighted-code"
	title="SyntaxHighlightedCode"
	component={SyntaxHighlightedCode}
	category="Molecules"
	description="Syntax highlighted code component for displaying code with syntax highlighting"
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		{@const code =
			typeof props.code === 'string' && props.code.trim().length > 0 ? props.code : sampleCode}
		{@const language =
			typeof props.language === 'string' ? (props.language as Props['language']) : undefined}
		{@const showLineNumbers =
			typeof props.showLineNumbers === 'boolean' ? props.showLineNumbers : undefined}
		<div class="p-4">
			<SyntaxHighlightedCode
				{code}
				{language}
				{showLineNumbers}
			/>
		</div>
	{/snippet}
</Story>
