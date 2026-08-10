<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import JointTabButtons from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'previewMode',
			type: 'select',
			defaultValue: 'file',
			options: ['file', 'markdown', 'story', 'json-tree', 'di']
		},
		{ name: 'previewKind', type: 'select', defaultValue: 'text', options: ['text', 'json', 'svg'] },
		{
			name: 'activeJoint',
			type: 'select',
			defaultValue: 'template',
			options: ['atom', 'molecule', 'organism', 'template']
		}
	];

	const files = [
		{ name: 'index.svelte', path: '/src/lib/wbd/component/template/invite-page/index.svelte' },
		{ name: 'index.ts', path: '/src/lib/wbd/component/template/invite-page/index.ts' }
	];
	const markdownFile = {
		name: 'README.md',
		path: '/src/lib/wbd/component/template/invite-page/README.md'
	};
	const storyFile = {
		name: 'index.story.svelte',
		path: '/src/lib/wbd/component/template/invite-page/index.story.svelte'
	};

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
		<div class="_c1">
			<JointTabButtons
				{files}
				{markdownFile}
				{storyFile}
				selectedEntityName="invite-page"
				{activeFilePath}
				previewMode={values.previewMode as any}
				previewKind={values.previewKind as any}
				activeJoint={values.activeJoint as string}
				hasDependencyPreview={true}
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
				onDependencySelect={() => {
					actionLabel = 'di';
				}}
			/>
			<p class="_c2">Last action: {actionLabel}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
