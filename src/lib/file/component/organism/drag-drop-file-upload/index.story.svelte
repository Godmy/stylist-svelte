<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DragDropFileUpload from './index.svelte';

	type Props = {
		accept: string;
		multiple: boolean;
		disabled: boolean;
		maxSize: number;
		preview: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'accept',
			type: 'text',
			defaultValue: '*'
		},
		{
			name: 'multiple',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'maxSize',
			type: 'number',
			defaultValue: 10485760 // 10MB in bytes
		},
		{
			name: 'preview',
			type: 'boolean',
			defaultValue: false
		}
	];

	function handleFileSelect(files: FileList) {
		console.log(
			'Files selected:',
			Array.from(files).map((f) => f.name)
		);
	}

	function handleFileUpload(file: File) {
		console.log('File uploaded:', file.name);
	}
</script>

<Story
	id="organisms-drag-drop-file-upload"
	title="Organisms / Interaction / Files / DragDropFileUpload"
	component={DragDropFileUpload}
	category="Organisms/Interaction/Files"
	description="A component for drag and drop file uploads."
	tags={['forms', 'upload', 'file']}
	{controls}
>
	{#snippet children(values: any)}
		<div
			class="sb-organisms-drag-drop-file-upload rounded-lg bg-[var(--color-background-secondary)] p-8"
		>
			<h2 class="mb-4 text-xl font-bold">DragDropFileUpload Story</h2>
			<DragDropFileUpload
				accept={values.accept}
				multiple={values.multiple}
				disabled={values.disabled}
				maxSize={values.maxSize}
				preview={values.preview}
				onFileSelect={handleFileSelect}
				onFileUpload={handleFileUpload}
			/>
		</div>
	{/snippet}
</Story>
