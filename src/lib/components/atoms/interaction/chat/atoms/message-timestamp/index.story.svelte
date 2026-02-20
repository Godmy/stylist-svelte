<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import MessageTimestamp from './index.svelte';

	let formatStyle: 'datetime' | 'time' | 'date' = 'datetime';
	let showRelative: boolean = false;

	const controls: ControlConfig[] = [
		{
			name: 'formatStyle',
			type: 'select',
			defaultValue: 'datetime',
			options: ['datetime', 'time', 'date'],
			description: 'The format style for displaying the timestamp'
		},
		{
			name: 'showRelative',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether to show relative time (e.g., "2 min ago")'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Message Timestamp Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Message Timestamp</h2>
		<div class="flex items-center gap-2">
			<span>Message sent at:</span>
			<MessageTimestamp
				timestamp={new Date()}
				formatStyle={formatStyle}
				showRelative={showRelative}
			/>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="timestamp-format-style" class="mb-1 block text-sm">Format Style:</label>
				<select
					id="timestamp-format-style"
					bind:value={formatStyle}
					class="rounded border p-1"
				>
					<option value="datetime">Date & Time</option>
					<option value="time">Time Only</option>
					<option value="date">Date Only</option>
				</select>
			</div>

			<div class="flex items-end">
				<label for="timestamp-show-relative" class="flex items-center gap-1">
					<input
						id="timestamp-show-relative"
						type="checkbox"
						bind:checked={showRelative}
					/>
					Show Relative Time
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Format Styles</h2>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-3">
			<div class="flex items-center gap-2">
				<span>Datetime format:</span>
				<MessageTimestamp timestamp={new Date()} formatStyle="datetime" showRelative={false} />
			</div>
			<div class="flex items-center gap-2">
				<span>Time only:</span>
				<MessageTimestamp timestamp={new Date()} formatStyle="time" showRelative={false} />
			</div>
			<div class="flex items-center gap-2">
				<span>Date only:</span>
				<MessageTimestamp timestamp={new Date()} formatStyle="date" showRelative={false} />
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Relative Time Example</h2>
		<div class="flex items-center gap-2">
			<span>Relative time (5 minutes ago):</span>
			<MessageTimestamp
				timestamp={new Date(Date.now() - 300000)}
				formatStyle="datetime"
				showRelative={true}
			/>
		</div>
	</div>
</div>





