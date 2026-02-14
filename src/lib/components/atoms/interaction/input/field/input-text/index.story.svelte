<script context="module">
	export const title = 'Input';
	export const category = 'Atoms/Controls/Input';
</script>

<script>
	import Input from './index.svelte';

	let id = 'input-1';
	let label = 'Name';
	let type = 'text';
	let placeholder = 'Enter text...';
	let value = '';
	let required = false;
	let disabled = false;
	let className = '';

	// Generate a random ID if needed
	const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="story-container">
	<h2>{title}</h2>
	<p>Basic text input field with different types and states.</p>

	<!-- Interactive Demo -->
	<div class="interactive-demo">
		<div class="mb-6 rounded border p-4">
			<h3 class="text-md mb-2 font-semibold">Interactive Input</h3>
			<div class="p-4">
				<Input
					id={uniqueId}
					{label}
					{type}
					{placeholder}
					{required}
					{disabled}
					{value}
					class={className}
				/>
			</div>

			<div class="mt-4 flex flex-wrap gap-2">
				<div>
					<label for="input-id" class="mb-1 block text-sm">ID:</label>
					<input id="input-id" type="text" bind:value={id} class="rounded border p-1" />
				</div>

				<div>
					<label for="input-label" class="mb-1 block text-sm">Label:</label>
					<input id="input-label" type="text" bind:value={label} class="rounded border p-1" />
				</div>

				<div>
					<label for="input-type" class="mb-1 block text-sm">Type:</label>
					<select id="input-type" bind:value={type} class="rounded border p-1">
						<option value="text">Text</option>
						<option value="email">Email</option>
						<option value="password">Password</option>
						<option value="number">Number</option>
					</select>
				</div>

				<div>
					<label for="input-placeholder" class="mb-1 block text-sm">Placeholder:</label>
					<input
						id="input-placeholder"
						type="text"
						bind:value={placeholder}
						class="rounded border p-1"
					/>
				</div>

				<div>
					<label for="input-value" class="mb-1 block text-sm">Value:</label>
					<input id="input-value" type="text" bind:value class="rounded border p-1" />
				</div>

				<div class="flex items-end">
					<label for="input-required" class="flex items-center gap-1">
						<input id="input-required" type="checkbox" bind:checked={required} />
						Required
					</label>
				</div>

				<div class="flex items-end">
					<label for="input-disabled" class="flex items-center gap-1">
						<input id="input-disabled" type="checkbox" bind:checked={disabled} />
						Disabled
					</label>
				</div>

				<div>
					<label for="input-classname" class="mb-1 block text-sm">Class Name:</label>
					<input
						id="input-classname"
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
		<h3>Input Variants</h3>
		<div class="variant-grid">
			<div>
				<h4 class="mb-2 text-sm font-medium">Text Input</h4>
				<Input id="text-input" label="Text Input" type="text" placeholder="Enter text..." />
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Email Input</h4>
				<Input id="email-input" label="Email Input" type="email" placeholder="Enter email..." />
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Password Input</h4>
				<Input
					id="password-input"
					label="Password Input"
					type="password"
					placeholder="Enter password..."
				/>
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Number Input</h4>
				<Input id="number-input" label="Number Input" type="number" placeholder="Enter number..." />
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Disabled Input</h4>
				<Input
					id="disabled-input"
					label="Disabled Input"
					type="text"
					placeholder="This input is disabled"
					disabled={true}
				/>
			</div>
			<div>
				<h4 class="mb-2 text-sm font-medium">Required Input</h4>
				<Input
					id="required-input"
					label="Required Input"
					type="text"
					placeholder="This input is required"
					required={true}
				/>
			</div>
		</div>
	</div>

	<!-- Tags -->
	<div class="tags">
		<span class="tag">form</span>
		<span class="tag">input</span>
		<span class="tag">ui</span>
		<span class="tag">controls</span>
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



