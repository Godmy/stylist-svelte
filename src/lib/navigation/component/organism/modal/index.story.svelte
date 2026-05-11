<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Modal from './index.svelte';

	type Props = {
		open: boolean;
		title: string;
		disabled: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'open',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Modal Window'
		}
	];

	let isOpen = $state(false);

	function handleClose() {
		isOpen = false;
	}

	function handleOpen() {
		isOpen = true;
	}
</script>

<Story
	id="organisms-modal"
	title="Organisms / Interaction / Dialogs / Modal"
	component={Modal}
	category="Organisms/Interaction/Dialogs"
	description="A modal dialog component."
	tags={['dialog', 'modal', 'overlay']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-modal p-4">
			<button
				class="mb-4 rounded bg-[var(--color-primary-600)] px-4 py-2 text-[var(--color-text-inverse)]"
				onclick={handleOpen}
			>
				Open Modal
			</button>
			<Modal open={isOpen} title={values.title} onClose={handleClose} />
		</div>
	{/snippet}
</Story>
