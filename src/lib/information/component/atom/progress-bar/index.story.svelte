<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProgressBar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Progress' },
		{ name: 'value', type: 'range', defaultValue: 64, min: 0, max: 100, step: 1 },
		{ name: 'max', type: 'number', defaultValue: 100 }
	];
</script>

<Story
	id="atoms-information-progress-bar"
	title="ProgressBar"
	component={ProgressBar}
	category="Atoms"
	description="General purpose progress indicator."
	tags={['progress', 'information']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProgressBar
				label={String(values.label || 'Progress')}
				value={Number(values.value) || 0}
				max={Number(values.max) || 100}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 32rem;
	}
</style>
