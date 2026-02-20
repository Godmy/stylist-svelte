<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import SyntaxHighlightedCode from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const sampleCode = `function greet(name) {
  console.log('Hello, ' + name + '!');

  return {
    message: 'Welcome to our app',
    timestamp: new Date().toISOString()
  };
}`;

	const controls = [
		{
			name: 'language',
			type: CONTROL_TYPES.SELECT,
			options: ['javascript', 'typescript', 'html', 'css', 'json', 'python', 'svelte'],
			defaultValue: 'javascript'
		},
		{
			name: 'showLineNumbers',
			type: CONTROL_TYPES.BOOLEAN,
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={SyntaxHighlightedCode}
	title="SyntaxHighlightedCode"
	category="Atoms/Information/Typography/Inline"
	description="Syntax highlighted code component for displaying code with syntax highlighting."
	tags={['code', 'syntax', 'highlighting', 'typography']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<SyntaxHighlightedCode
				code={sampleCode}
				language={props.language}
				showLineNumbers={props.showLineNumbers}
			/>
			
			<h3 class="mt-8 mb-4 text-lg font-bold">Different Languages</h3>
			<div class="space-y-4">
				<div>
					<p class="mb-2 text-sm font-semibold">TypeScript:</p>
					<SyntaxHighlightedCode
						code={`interface User {
  id: number;
  name: string;
  email: string;
}`}
						language="typescript"
					/>
				</div>
				<div>
					<p class="mb-2 text-sm font-semibold">HTML:</p>
					<SyntaxHighlightedCode
						code={`<div class="container">
  <h1>Hello World</h1>
  <p>Welcome to our app</p>
</div>`}
						language="html"
					/>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
