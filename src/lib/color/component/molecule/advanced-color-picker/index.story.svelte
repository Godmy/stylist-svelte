<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AdvancedColorPicker from './index.svelte';

	type Props = {
		value: string;
		disabled: boolean;
		showInput: boolean;
		showPalette: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'text',
			defaultValue: '#22b14c'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'showInput',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'showPalette',
			type: 'boolean',
			defaultValue: true
		}
	];

	let selectedColor: string = '#22b14c';

	function handleInputChange(value: string) {
		selectedColor = value;
		console.log('Color changed:', value);
	}
</script>

<Story
	id="organisms-advanced-color-picker"
	title="Organisms / Interaction / Input / Advanced Color Picker"
	component={AdvancedColorPicker}
	category="Organisms/Interaction/Input"
	description="An advanced color picker component."
	tags={['input', 'color', 'picker']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<div class="_c3">
					<div class="_c4" style="background-color: {selectedColor};"></div>
					<span>Selected color: {selectedColor}</span>
				</div>
			</div>
			<AdvancedColorPicker
				value={values.value}
				disabled={values.disabled}
				showInput={values.showInput}
				showPalette={values.showPalette}
				onInput={handleInputChange}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	._c3 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	._c4 {
		height: 2rem;
		width: 2rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
	}
</style>
