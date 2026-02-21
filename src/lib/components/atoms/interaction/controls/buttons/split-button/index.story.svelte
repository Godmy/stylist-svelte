<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SplitButton from './index.svelte';

	const items = [
		{ label: 'Duplicate', onClick: () => {} },
		{ label: 'Archive', onClick: () => {} },
		{ label: 'Delete', onClick: () => {}, disabled: true }
	];

	const controls: ControlConfig[] = [
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary','secondary','success','warning','danger','outline','ghost','link'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'primaryLabel', type: 'text', defaultValue: 'Action' }
	];
</script>

<Story
	{controls}
	component={SplitButton}
	title="SplitButton"
	category="Atoms/Interaction/Controls/Buttons"
	description="Primary action with secondary dropdown actions"
>
	{#snippet children(values: any)}
		<SplitButton
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			items={items}
			primaryAction={() => {}}
			primaryLabel={values.primaryLabel as string}
		/>
	{/snippet}
</Story>
