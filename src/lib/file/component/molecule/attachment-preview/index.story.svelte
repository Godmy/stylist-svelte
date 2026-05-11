<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeAttachmentPreview from './index.svelte';

	type Props = {
		attachmentName: string;
		attachmentType: 'image' | 'document' | 'video' | 'audio';
		attachmentSize: number;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'attachmentName',
			type: 'text',
			defaultValue: 'example.pdf'
		},
		{
			name: 'attachmentType',
			type: 'select',
			defaultValue: 'document',
			options: ['image', 'document', 'video', 'audio']
		},
		{
			name: 'attachmentSize',
			type: 'number',
			defaultValue: 2400000
		}
	];
</script>

<Story
	id="molecules-attachment-preview"
	title="RecipeAttachmentPreview"
	component={RecipeAttachmentPreview}
	category="Molecules"
	description="A component to preview file attachments."
	tags={['file', 'preview', 'attachment']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="p-6">
			<h2 class="mb-6 text-xl font-semibold">Attachment Preview</h2>
			<div class="mx-auto max-w-md">
				<RecipeAttachmentPreview
					attachment={{
						id: '1',
						name: values.attachmentName,
						type: values.attachmentType,
						size: values.attachmentSize
					}}
				/>
			</div>
		</div>
	{/snippet}
</Story>
