<script lang="ts">
	import CopyButton from './index.svelte';

	let text = 'npm install stylist-svelte';
	let label = 'Copy command';
	let successMessage = 'Copied to clipboard';
	let showIcon = true;
	let status: string | null = null;
	let statusType: 'success' | 'error' = 'success';

	function handleSuccess(message: string) {
		status = message;
		statusType = 'success';
	}

	function handleError(error: Error) {
		status = error.message;
		statusType = 'error';
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Copy Button</h1>

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
				<label for="copy-show-icon" class="flex items-center gap-1 text-sm">
					<input id="copy-show-icon" type="checkbox" bind:checked={showIcon} />
					Show icon
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
					onSuccess={handleSuccess}
					onError={handleError}
				/>
				<span class="text-xs text-gray-500">Copy a code snippet</span>
			</div>
		</div>
	</div>
</div>



