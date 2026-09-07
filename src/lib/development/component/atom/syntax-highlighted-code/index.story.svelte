<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SyntaxHighlightedCode from './index.svelte';

	const sampleCode = `function greet(name) {
  console.log('Hello, ' + name + '!');

  return {
    message: 'Welcome to our app',
    timestamp: new Date().toISOString()
  };
}`;

	const controls: SlotStory[] = [
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
	{controls}
	component={SyntaxHighlightedCode}
	title="SyntaxHighlightedCode"
	category="Atoms/Information/Typography/Inline"
	description="Syntax highlighted code component for displaying code with syntax highlighting."
	tags={['code', 'syntax', 'highlighting', 'typography']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SyntaxHighlightedCode
				code={sampleCode}
				language={values.language}
				showLineNumbers={values.showLineNumbers}
			/>

			<h3 class="_c2">Different Languages</h3>
			<div class="_c3">
				<div>
					<p class="_c4">TypeScript:</p>
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
					<p class="_c4">HTML:</p>
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

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
	._c3 > * + * {
		margin-top: 1rem;
	}
	._c4 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
	}
</style>
