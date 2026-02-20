<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import TimeSlot from './index.svelte';
	import type { ITimeSlot } from '$stylist/design-system/props/time-slot';

	let available: boolean = true;
	let selected: boolean = false;
	let active: boolean = false;

	const controls: ControlConfig[] = [
		{
			name: 'available',
			type: 'boolean',
			defaultValue: true,
			description: 'Whether the time slot is available'
		},
		{
			name: 'selected',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the time slot is selected'
		},
		{
			name: 'active',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the time slot is active'
		}
	];

	// Sample time slots for scenarios
	const sampleTimeSlot: ITimeSlot = {
		start: new Date(2023, 0, 1, 9, 0),
		end: new Date(2023, 0, 1, 10, 0),
		timeLabel: '9:00 AM - 10:00 AM',
		available: true,
		selected: false,
		active: false,
		events: []
	};

	const defaultPrimaryScenario: ITimeSlot = {
		start: new Date(2023, 0, 1, 10, 0),
		end: new Date(2023, 0, 1, 11, 0),
		timeLabel: '10:00 AM - 11:00 AM',
		available: true,
		selected: true,
		active: false,
		events: []
	};

	const variantScenariosData: ITimeSlot[] = [
		{
			start: new Date(2023, 0, 1, 8, 0),
			end: new Date(2023, 0, 1, 9, 0),
			timeLabel: '8:00 AM - 9:00 AM',
			available: true,
			selected: false,
			active: true,
			events: []
		},
		{
			start: new Date(2023, 0, 1, 11, 0),
			end: new Date(2023, 0, 1, 12, 0),
			timeLabel: '11:00 AM - 12:00 PM',
			available: true,
			selected: false,
			active: false,
			events: [{ id: 1, title: 'Meeting' }]
		},
		{
			start: new Date(2023, 0, 1, 12, 0),
			end: new Date(2023, 0, 1, 13, 0),
			timeLabel: '12:00 PM - 1:00 PM',
			available: false,
			selected: false,
			active: false,
			events: []
		}
	];

	// Handle click for demo purposes
	function handleTimeSlotClick(slot: ITimeSlot) {
		console.log('Time slot clicked:', slot);
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Time Slot Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Time Slot</h2>
		<div class="mt-6 flex flex-wrap gap-4">
			<TimeSlot
				{...defaultPrimaryScenario}
				available={available}
				selected={selected}
				active={active}
				onValueChange={handleTimeSlotClick}
			/>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div class="flex items-end">
				<label for="time-slot-available" class="flex items-center gap-1">
					<input id="time-slot-available" type="checkbox" bind:checked={available} />
					Available
				</label>
			</div>

			<div class="flex items-end">
				<label for="time-slot-selected" class="flex items-center gap-1">
					<input id="time-slot-selected" type="checkbox" bind:checked={selected} />
					Selected
				</label>
			</div>

			<div class="flex items-end">
				<label for="time-slot-active" class="flex items-center gap-1">
					<input id="time-slot-active" type="checkbox" bind:checked={active} />
					Active
				</label>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Time Slot Variations</h2>
		<div class="space-y-3">
			{#each variantScenariosData as scenario}
				<article class="flex items-center justify-between rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
					<div>
						<p class="text-sm font-semibold text-[--color-text-primary]">{scenario.timeLabel}</p>
						<p class="text-xs text-[--color-text-secondary]">Status: {scenario.available ? 'Available' : 'Booked'}</p>
					</div>
					<TimeSlot
						{...scenario}
						onValueChange={handleTimeSlotClick}
					/>
				</article>
			{/each}
		</div>
	</div>
</div>




