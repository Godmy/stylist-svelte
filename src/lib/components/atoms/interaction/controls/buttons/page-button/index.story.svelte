<script lang="ts">
	import ButtonPage from './index.svelte';

	let page = 1;
	let isActive = false;
	let disabled = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Page Button</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Page Button</h2>
		<div class="flex flex-col items-center gap-4">
			<ButtonPage {page} {isActive} {disabled} />
			<p class="text-sm text-gray-500">
				Toggle active/disabled states to preview pagination styling.
			</p>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="page-number" class="mb-1 block text-sm">Page number:</label>
				<input
					id="page-number"
					type="number"
					min="1"
					bind:value={page}
					class="w-20 rounded border p-1"
				/>
			</div>

			<div class="flex items-end gap-4">
				<label for="page-active" class="flex items-center gap-1">
					<input id="page-active" type="checkbox" bind:checked={isActive} />
					Active
				</label>
				<label for="page-disabled" class="flex items-center gap-1">
					<input id="page-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Examples</h2>
		<div class="flex flex-wrap items-center gap-4">
			<ButtonPage page={1} isActive={false} disabled={false} />
			<ButtonPage page={2} isActive={true} disabled={false} />
			<ButtonPage page={3} isActive={false} disabled={false} />
			<ButtonPage page={4} isActive={false} disabled={true} />
		</div>
	</div>
</div>
