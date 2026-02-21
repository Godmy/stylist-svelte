<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import IconButton from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'variant', type: 'select', defaultValue: 'ghost', options: ['primary','secondary','success','warning','danger','ghost','link'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'label', type: 'text', defaultValue: 'Open settings' }
	];
</script>

<Story
	{controls}
	component={IconButton}
	title="IconButton"
	category="Atoms/Interaction/Controls/Buttons"
	description="Compact icon-only action button"
>
	{#snippet children(values: any)}
		<IconButton
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			loading={values.loading as boolean}
			ariaLabel={values.label as string}
		/>
	{/snippet}
</Story>
