<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ChatStatusIndicator from './index.svelte';

	let status: 'online' | 'offline' | 'away' | 'typing' = 'online';
	let size: 'sm' | 'md' | 'lg' = 'sm';
	let showLabel: boolean = false;

	const controls: ControlConfig[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'online',
			options: ['online', 'offline', 'away', 'typing'],
			description: 'The status to display'
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'sm',
			options: ['sm', 'md', 'lg'],
			description: 'The size of the indicator'
		},
		{
			name: 'showLabel',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether to show the status label'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Chat Status Indicator Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Chat Status Indicator</h2>
		<div class="flex items-center gap-4">
			<ChatStatusIndicator {status} {size} {showLabel} />
			<span>Status: {status}</span>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="status-indicator-status" class="mb-1 block text-sm">Status:</label>
				<select
					id="status-indicator-status"
					bind:value={status}
					class="rounded border p-1"
				>
					<option value="online">Online</option>
					<option value="offline">Offline</option>
					<option value="away">Away</option>
					<option value="typing">Typing</option>
				</select>
			</div>

			<div>
				<label for="status-indicator-size" class="mb-1 block text-sm">Size:</label>
				<select
					id="status-indicator-size"
					bind:value={size}
					class="rounded border p-1"
				>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div class="flex items-end">
				<label for="status-indicator-show-label" class="flex items-center gap-1">
					<input
						id="status-indicator-show-label"
						type="checkbox"
						bind:checked={showLabel}
					/>
					Show Label
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Status Types</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="online" size="sm" />
				<span class="mt-1 text-xs">Online</span>
			</div>
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="offline" size="sm" />
				<span class="mt-1 text-xs">Offline</span>
			</div>
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="away" size="sm" />
				<span class="mt-1 text-xs">Away</span>
			</div>
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="typing" size="sm" />
				<span class="mt-1 text-xs">Typing</span>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Sizes</h2>
		<div class="flex items-center gap-4">
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="online" size="sm" />
				<span class="mt-1 text-xs">Small</span>
			</div>
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="online" size="md" />
				<span class="mt-1 text-xs">Medium</span>
			</div>
			<div class="flex flex-col items-center">
				<ChatStatusIndicator status="online" size="lg" />
				<span class="mt-1 text-xs">Large</span>
			</div>
		</div>
	</div>
</div>





