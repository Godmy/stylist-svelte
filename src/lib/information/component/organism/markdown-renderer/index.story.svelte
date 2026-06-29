<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeMarkdownRenderer from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'className', type: 'text', defaultValue: '' }
	];

	const sampleMarkdown = `# Release Notes

The renderer supports **strong emphasis**, inline \`code\`, lists, blockquotes, and tables.

- Improved component catalog navigation
- Added typed domain moves for playground entities
- Refreshed story previews after migration

> Markdown content keeps inherited text color and spacing.

| Area | Status |
| --- | --- |
| Components | Updated |
| Stories | Reviewed |

\`\`\`ts
export const status = 'ready';
\`\`\`
`;
</script>

<Story
	component={RecipeMarkdownRenderer}
	title="Markdown Renderer"
	description="Information-domain renderer for markdown content inside documentation, notes, and file previews."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeMarkdownRenderer content={sampleMarkdown} class={values.className} />
	{/snippet}
</Story>
