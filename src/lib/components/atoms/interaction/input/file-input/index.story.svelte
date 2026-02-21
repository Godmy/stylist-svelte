<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import FileInput from './index.svelte';

	let selectedLabel = $state('No file selected');

	const controls: ControlConfig[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Attach files' },
		{ name: 'accept', type: 'text', defaultValue: '.png,.jpg,.pdf' },
		{ name: 'multiple', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={FileInput} title="FileInput" description="File picker with single or multiple upload mode." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3 max-w-md">
			<FileInput
				placeholder={values.placeholder}
				accept={values.accept}
				multiple={values.multiple}
				disabled={values.disabled}
				onFileChange={(file) => {
					if (!file) selectedLabel = 'No file selected';
					else if (Array.isArray(file)) selectedLabel = `${file.length} files selected`;
					else selectedLabel = file.name;
				}}
			/>
			<p class="text-sm text-[--color-text-secondary]">{selectedLabel}</p>
		</div>
	{/snippet}
</Story>
