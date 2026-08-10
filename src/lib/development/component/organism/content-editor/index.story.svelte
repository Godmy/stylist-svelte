<script lang="ts">
	import type { ContentEditorStateProps } from '$stylist/development/interface/recipe/content-editor-state-props';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import ContentEditor from './index.svelte';

	const initialContent: NonNullable<ContentEditorStateProps['initialContent']> = [
		{ id: '1', type: 'header', content: 'Welcome to Our Blog' },
		{ id: '2', type: 'text', content: 'This is the beginning of our new article.' },
		{ id: '3', type: 'quote', content: 'The only way to do great work is to love what you do.' }
	];

	const controls: SlotStory[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Start writing your content here...' },
		{ name: 'showToolbar', type: 'boolean', defaultValue: true },
		{ name: 'showPreviewButton', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="organisms-content-editor"
	title="Organisms / Interaction / Content / ContentEditor"
	component={ContentEditor}
	category="Organisms/Interaction/Content"
	description="Rich content editor with multiple content types and formatting tools."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ContentEditor
				{initialContent}
				placeholder={values.placeholder as string}
				showToolbar={values.showToolbar as boolean}
				showPreviewButton={values.showPreviewButton as boolean}
				onSave={(content: NonNullable<ContentEditorStateProps['initialContent']>) => {
					console.log('Content saved:', content);
				}}
				onPreview={() => {
					console.log('Preview mode toggled');
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 500px;
	}
</style>
