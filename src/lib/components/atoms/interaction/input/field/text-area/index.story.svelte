<script context="module">
	export const title = 'Textarea';
	export const category = 'Atoms/Controls/Input';
</script>

<script lang="ts">
	import Textarea from './index.svelte';

	let id = 'textarea-1';
	let label = 'Message';
	let placeholder = 'Enter text...';
	let required = false;
	let disabled = false;
	let value = '';
	let errors = '';
	let rows = 3;
	let maxlength: number | undefined = undefined;
	let className = '';

	// Normalize errors
	const normalizedErrors =
		typeof errors === 'string'
			? errors
					.split(',')
					.map((segment) => segment.trim())
					.filter((segment) => segment.length > 0)
			: Array.isArray(errors)
				? errors
				: [];

	// Generate a random ID if needed
	const uniqueId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="story-container">
	<h2>{title}</h2>
	<p>Styled textarea field with label and error handling.</p>

	<!-- Interactive Demo -->
	<div class="interactive-demo">
		<div class="mb-6 rounded border p-4">
			<h3 class="text-md mb-2 font-semibold">Interactive Textarea</h3>
			<div class="p-4">
				<Textarea
					id={uniqueId}
					{label}
					{placeholder}
					{required}
					{disabled}
					{value}
					errors={normalizedErrors}
					{rows}
					{maxlength}
					class={className}
				/>
			</div>

			<div class="mt-4 flex flex-wrap gap-2">
				<div>
					<label for="textarea-id" class="mb-1 block text-sm">ID:</label>
					<input id="textarea-id" type="text" bind:value={id} class="rounded border p-1" />
				</div>

				<div>
					<label for="textarea-label" class="mb-1 block text-sm">Label:</label>
					<input id="textarea-label" type="text" bind:value={label} class="rounded border p-1" />
				</div>

				<div>
					<label for="textarea-placeholder" class="mb-1 block text-sm">Placeholder:</label>
					<input
						id="textarea-placeholder"
						type="text"
						bind:value={placeholder}
						class="rounded border p-1"
					/>
				</div>

				<div>
					<label for="textarea-value" class="mb-1 block text-sm">Value:</label>
					<input id="textarea-value" type="text" bind:value class="rounded border p-1" />
				</div>

				<div>
					<label for="textarea-errors" class="mb-1 block text-sm">Errors (comma-separated):</label>
					<input id="textarea-errors" type="text" bind:value={errors} class="rounded border p-1" />
				</div>

				<div>
					<label for="textarea-rows" class="mb-1 block text-sm">Rows:</label>
					<input id="textarea-rows" type="number" bind:value={rows} class="rounded border p-1" />
				</div>

				<div>
					<label for="textarea-maxlength" class="mb-1 block text-sm">Max Length:</label>
					<input
						id="textarea-maxlength"
						type="number"
						bind:value={maxlength}
						class="rounded border p-1"
					/>
				</div>

				<div class="flex items-end">
					<label for="textarea-required" class="flex items-center gap-1">
						<input id="textarea-required" type="checkbox" bind:checked={required} />
						Required
					</label>
				</div>

				<div class="flex items-end">
					<label for="textarea-disabled" class="flex items-center gap-1">
						<input id="textarea-disabled" type="checkbox" bind:checked={disabled} />
						Disabled
					</label>
				</div>

				<div>
					<label for="textarea-classname" class="mb-1 block text-sm">Class Name:</label>
					<input
						id="textarea-classname"
						type="text"
						bind:value={className}
						class="rounded border p-1"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Variants Section -->
	<div class="variants-section">
		<h3>Textarea States</h3>
		<div class="variant-grid">
			<div>
				<h4 class="mb-2 text-sm font-medium">Normal State</h4>
				<Textarea
					id="normal-textarea"
					label="Normal Textarea"
					placeholder="Enter your message..."
					rows={3}
				/>
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Disabled State</h4>
				<Textarea
					id="disabled-textarea"
					label="Disabled Textarea"
					placeholder="This textarea is disabled"
					disabled={true}
					rows={3}
				/>
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">With Error</h4>
				<Textarea
					id="error-textarea"
					label="Textarea with Error"
					placeholder="This textarea has an error"
					errors={['This field is required']}
					rows={3}
				/>
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Required Field</h4>
				<Textarea
					id="required-textarea"
					label="Required Textarea"
					placeholder="This textarea is required"
					required={true}
					rows={3}
				/>
			</div>
		</div>
	</div>

	<!-- Tags -->
	<div class="tags">
		<span class="tag">form</span>
		<span class="tag">textarea</span>
		<span class="tag">ui</span>
		<span class="tag">input</span>
	</div>
</div>

<style>
	.story-container {
		padding: 20px;
		max-width: 100%;
		font-family: sans-serif;
	}

	h2,
	h3,
	h4 {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.interactive-demo {
		margin: 1.5rem 0;
	}

	.variants-section {
		margin-top: 2rem;
	}

	.variant-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.tags {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		background: #f0f0f0;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.875rem;
	}
</style>



