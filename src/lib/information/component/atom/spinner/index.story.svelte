<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Spinner from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'label', type: 'text', defaultValue: 'Loading' }
	];
</script>

<Story
	id="atoms-information-spinner"
	title="Spinner"
	component={Spinner}
	category="Atoms"
	description="Indeterminate loading indicator."
	tags={['spinner', 'loading', 'information']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Spinner size={values.size} label={String(values.label || 'Loading')} />
			<Spinner size="sm" />
			<Spinner size="md" />
			<Spinner size="lg" />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
