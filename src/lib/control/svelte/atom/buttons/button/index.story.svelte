<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Button from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Click me' },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary','secondary','success','warning','danger','outline','ghost','link'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={Button}
	title="Button"
	category="Atoms/Interaction/Controls/Buttons"
	description="Base button component"
>
	{#snippet children(values: any)}
		<Button
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			loading={values.loading as boolean}
			block={values.block as boolean}
		>
			{values.label as string}
		</Button>
	{/snippet}
</Story>



