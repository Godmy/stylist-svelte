<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import CopyButton from './index.svelte';

	let text: string = 'npm install stylist-svelte';
	let label: string = 'Copy command';
	let successMessage: string = 'Copied to clipboard';
	let showIcon: boolean = true;
	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' | 'outline' = 'outline';
	let size: 'sm' | 'md' | 'lg' = 'md';
	let disabled: boolean = false;

	const controls: ControlConfig[] = [
		{
			name: 'text',
			type: 'text',
			defaultValue: 'npm install stylist-svelte',
			description: 'Text to copy to clipboard'
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Copy command',
			description: 'Label for the button'
		},
		{
			name: 'showIcon',
			type: 'boolean',
			defaultValue: true,
			description: 'Whether to show the copy icon'
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'outline',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link', 'outline'],
			description: 'Visual style of the button'
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			description: 'Size of the button'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the button is disabled'
		}
	];

	let status: string | null = null;
	let statusType: 'success' | 'error' = 'success';

	function handleSuccess(message: string) {
		status = message;
		statusType = 'success';
		console.log('Copy successful:', message);
	}

	function handleError(error: Error) {
		status = error.message;
		statusType = 'error';
		console.log('Copy failed:', error.message);
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Copy Button Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Copy Button</h2>
		<div class="flex flex-col gap-4">
			<pre class="overflow-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{text}
      </pre>

			<CopyButton
				{text}
				{label}
				{successMessage}
				{showIcon}
				{variant}
				{size}
				{disabled}
				onSuccess={handleSuccess}
				onError={handleError}
			/>

			{#if status}
				<div
					class={`text-sm font-medium ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}
				>
					{status}
				</div>
			{/if}
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div class="w-full md:w-auto md:min-w-[260px]">
				<label for="copy-text" class="mb-1 block text-sm">Text to copy:</label>
				<textarea id="copy-text" bind:value={text} rows="3" class="w-full rounded border p-2"
				></textarea>
			</div>

			<div class="flex flex-col gap-2">
				<div>
					<label for="copy-label" class="mb-1 block text-sm">Label:</label>
					<input id="copy-label" bind:value={label} class="w-full rounded border p-1 md:w-56" />
				</div>
				<div>
					<label for="copy-success" class="mb-1 block text-sm">Success message:</label>
					<input
						id="copy-success"
						bind:value={successMessage}
						class="w-full rounded border p-1 md:w-56"
					/>
				</div>
				<div>
					<label for="copy-variant" class="mb-1 block text-sm">Variant:</label>
					<select
						id="copy-variant"
						bind:value={variant}
						class="rounded border p-1"
					>
						<option value="primary">Primary</option>
						<option value="secondary">Secondary</option>
						<option value="success">Success</option>
						<option value="warning">Warning</option>
						<option value="danger">Danger</option>
						<option value="outline">Outline</option>
						<option value="ghost">Ghost</option>
						<option value="link">Link</option>
					</select>
				</div>
				<div>
					<label for="copy-size" class="mb-1 block text-sm">Size:</label>
					<select
						id="copy-size"
						bind:value={size}
						class="rounded border p-1"
					>
						<option value="sm">Small</option>
						<option value="md">Medium</option>
						<option value="lg">Large</option>
					</select>
				</div>
				<label for="copy-show-icon" class="flex items-center gap-1 text-sm">
					<input id="copy-show-icon" type="checkbox" bind:checked={showIcon} />
					Show icon
				</label>
				<label for="copy-disabled" class="flex items-center gap-1 text-sm">
					<input id="copy-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Quick Examples</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="flex flex-col gap-2">
				<CopyButton
					text="https://example.com"
					label="Copy link"
					successMessage="Link copied"
					{showIcon}
					variant="primary"
					size="md"
					onSuccess={handleSuccess}
					onError={handleError}
				/>
				<span class="text-xs text-gray-500">Copy a URL</span>
			</div>
			<div class="flex flex-col gap-2">
				<CopyButton
					text="export const token = 'secret';"
					label="Copy snippet"
					successMessage="Snippet copied"
					{showIcon}
					variant="secondary"
					size="md"
					onSuccess={handleSuccess}
					onError={handleError}
				/>
				<span class="text-xs text-gray-500">Copy a code snippet</span>
			</div>
		</div>
	</div>
</div>



