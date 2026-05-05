<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DomainFilePreview from './index.svelte';
	import ClickableStory from '$stylist/interaction/component/atom/clickable/index.story.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'previewMode', type: 'select', defaultValue: 'file', options: ['file', 'markdown', 'story', 'json-tree'] },
		{ name: 'previewKind', type: 'select', defaultValue: 'text', options: ['text', 'json', 'svg'] }
	];

	const textContent = '<script lang="ts">\n\timport { Clickable } from \'$stylist/interaction/component\';\n<\\/script>';
	const markdownContent = `# Story Coverage\n\n- clickable\n- hoverable\n- focusable`;
	const jsonContent = JSON.stringify({ story: 'clickable', ready: true, events: ['click', 'dblclick'] }, null, 2);
	const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><rect x="18" y="18" width="84" height="84" rx="20" fill="#e0f2fe"/><path d="M36 60h48" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/><circle cx="84" cy="60" r="12" fill="#0f172a"/></svg>';
</script>

<Story
	{controls}
	component={DomainFilePreview}
	title="DomainFilePreview"
	description="File preview panel for raw text, markdown, story, JSON tree, and SVG content."
>
	{#snippet children(values: any)}
		{@const previewMode = values.previewMode as 'file' | 'markdown' | 'story' | 'json-tree'}
		{@const previewKind = values.previewKind as 'text' | 'json' | 'svg'}
		<div class="h-[32rem] overflow-hidden rounded-2xl border border-slate-200 bg-white">
			<DomainFilePreview
				{previewMode}
				previewKind={previewMode === 'markdown' ? 'text' : previewKind}
				fileContent={previewMode === 'markdown' ? markdownContent : previewKind === 'json' ? jsonContent : previewKind === 'svg' ? svgContent : textContent}
				storyPreviewComponent={ClickableStory}
			/>
		</div>
	{/snippet}
</Story>
