<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CharacterCount from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'current', type: 'number', defaultValue: 40, min: 0, max: 300, step: 1 },
		{ name: 'max', type: 'number', defaultValue: 120, min: 1, max: 500, step: 1 },
		{ name: 'showPercentage', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={CharacterCount} title="CharactersCount" description="Character progress indicator for text fields." {controls}>
	{#snippet children(values: any)}
		<CharacterCount
			current={values.current}
			max={values.max}
			showPercentage={values.showPercentage}
		/>
	{/snippet}
</Story>



