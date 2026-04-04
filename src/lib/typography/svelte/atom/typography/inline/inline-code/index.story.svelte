<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import InlineCode from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger'];

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'variant',
			type: 'select',
			options: variantOptions,
			defaultValue: 'default'
		}
	];
</script>

<Story
	{controls}
	component={InlineCode}
	title="InlineCode"
	category="Atoms/Information/Typography/Inline"
	description="InlineCode component for displaying inline formatted code."
	tags={['code', 'typography', 'syntax', 'highlighting']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<div>
				This is an example of <InlineCode class={String(values.variant ?? 'default')}>inline code</InlineCode> styling.
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">Different Variants</h3>
			<div class="flex flex-wrap items-center gap-4">
				<InlineCode>default</InlineCode>
				<InlineCode class="success">success</InlineCode>
				<InlineCode class="warning">warning</InlineCode>
				<InlineCode class="danger">danger</InlineCode>
			</div>
		</div>
	{/snippet}
</Story>








