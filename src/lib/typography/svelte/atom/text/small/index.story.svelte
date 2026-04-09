<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Small from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'content', type: 'text', defaultValue: 'Small helper text' },
		{ name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'primary' },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={Small}
	title="Small"
	category="Atoms/Information/Typography/Text"
	description="Small text component"
>
	{#snippet children(values: any)}
		<Small
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			block={values.block as boolean}
		>
			{values.content as string}
		</Small>
	{/snippet}
</Story>



