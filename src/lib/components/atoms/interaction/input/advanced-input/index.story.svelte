<script lang="ts">
	import AdvancedInput from './index.svelte';

	let label: string = 'Username';
	let value: string = '';
	let placeholder: string = 'Enter your username';
	let type: string = 'text';
	let disabled: boolean = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">AdvancedInput Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Input</h2>
		<div class="flex flex-col gap-4">
			<AdvancedInput {label} bind:value {placeholder} {type} {disabled} />
			<p class="text-sm text-gray-500">
				Value: <span class="font-mono">{value}</span>
			</p>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="input-label" class="mb-1 block text-sm">Label:</label>
				<input id="input-label" type="text" bind:value={label} class="rounded border p-1" />
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
				<label for="input-type" class="mb-1 block text-sm">Type:</label>
				<select id="input-type" bind:value={type} class="rounded border p-1">
					<option value="text">Text</option>
					<option value="email">Email</option>
					<option value="password">Password</option>
					<option value="number">Number</option>
				</select>
			</div>

			<div class="flex items-end">
				<label for="input-disabled" class="flex items-center gap-1">
					<input id="input-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Input Variants</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				<AdvancedInput label="Text Input" placeholder="Enter text..." type="text" />
			</div>
			<div>
				<AdvancedInput label="Email Input" placeholder="Enter email..." type="email" />
			</div>
			<div>
				<AdvancedInput label="Password Input" placeholder="Enter password..." type="password" />
			</div>
			<div>
				<AdvancedInput label="Number Input" placeholder="Enter number..." type="number" />
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Disabled State</h2>
		<AdvancedInput label="Disabled Input" placeholder="This input is disabled" disabled={true} />
	</div>
</div>



