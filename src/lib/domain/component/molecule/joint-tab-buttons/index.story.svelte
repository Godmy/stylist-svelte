<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import JointTabButtons from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'previewMode', type: 'select', defaultValue: 'file', options: ['file', 'markdown', 'story', 'json-tree'] },
		{ name: 'previewKind', type: 'select', defaultValue: 'text', options: ['text', 'json', 'svg'] }
	];

	const files = [
		{ name: 'index.svelte', path: '/src/lib/interaction/component/atom/clickable/index.svelte' },
		{ name: 'index.ts', path: '/src/lib/interaction/component/atom/clickable/index.ts' }
	];
	const markdownFile = { name: 'README.md', path: '/src/lib/interaction/component/atom/clickable/README.md' };
	const storyFile = { name: 'index.story.svelte', path: '/src/lib/interaction/component/atom/clickable/index.story.svelte' };

	let activeFilePath = $state(files[0].path);
	let actionLabel = $state('ready');
</script>

<Story
	{controls}
	component={JointTabButtons}
	title="JointTabButtons"
	description="File tab strip with preview mode actions for the domain workspace."
>
	{#snippet children(values: any)}
		<div class="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4">
			<JointTabButtons
				{files}
				{markdownFile}
				{storyFile}
				{activeFilePath}
				previewMode={values.previewMode as any}
				previewKind={values.previewKind as any}
				activeFamily="clickable"
				onFileSelect={(path) => {
					activeFilePath = path;
					actionLabel = `file: ${path.split('/').pop()}`;
				}}
				onMarkdownSelect={() => {
					actionLabel = 'markdown';
				}}
				onStorySelect={() => {
					actionLabel = 'story';
				}}
				onJsonTreeSelect={() => {
					actionLabel = 'json-tree';
				}}
				onOpenBacklog={() => {
					actionLabel = 'manual entry';
				}}
				onRefineAppearance={() => {
					actionLabel = 'refine appearance';
				}}
			/>
			<p class="text-sm text-slate-500">Last action: {actionLabel}</p>
		</div>
	{/snippet}
</Story>
