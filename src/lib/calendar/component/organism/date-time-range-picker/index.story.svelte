<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DateTimeRangePicker from './index.svelte';

	type DateTimeRangeValue = { start: Date | null; end: Date | null };

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'placeholder',
			type: 'text',
			defaultValue: 'Select date and time range...'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];

	let selectedRange: DateTimeRangeValue = { start: null, end: null };

	function handleInputChange(value: DateTimeRangeValue) {
		selectedRange = value;
		console.log('Date time range changed:', value);
	}
</script>

<Story
	id="organisms-date-time-range-picker"
	title="Organisms / Interaction / Input / Date Time Range Picker"
	component={DateTimeRangePicker}
	category="Organisms/Interaction/Input"
	description="A date and time range picker component."
	tags={['input', 'datetime', 'picker', 'range']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<p>
					Selected range: {selectedRange.start ? selectedRange.start.toLocaleString() : 'None'} - {selectedRange.end
						? selectedRange.end.toLocaleString()
						: 'None'}
				</p>
			</div>
			<DateTimeRangePicker
				placeholder={values.placeholder}
				disabled={values.disabled}
				onInput={handleInputChange}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 32rem;
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
	}
</style>
