<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import CloseButton from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'variant', type: 'select', defaultValue: 'ghost', options: ['solid', 'outline', 'ghost'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'loading', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={CloseButton}
	title="CloseButton"
	category="Atoms/Interaction/Controls/Buttons"
	description="Icon button for dismiss actions"
>
	{#snippet children(values: any)}
		<CloseButton
			size={values.size as 'sm' | 'md' | 'lg'}
			variant={values.variant as 'solid' | 'outline' | 'ghost'}
			disabled={values.disabled as boolean}
			loading={values.loading as boolean}
			aria-label="Close"
		/>
	{/snippet}
</Story>



