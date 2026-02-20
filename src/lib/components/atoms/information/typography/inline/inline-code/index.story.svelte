<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import InlineCode from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const variantOptions = ['default', 'success', 'warning', 'danger'];

	const controls = [
		{
			name: 'variant',
			type: CONTROL_TYPES.SELECT,
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
				This is an example of <InlineCode variant={props.variant}>inline code</InlineCode> styling.
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">Different Variants</h3>
			<div class="flex flex-wrap items-center gap-4">
				<InlineCode variant="default">default</InlineCode>
				<InlineCode variant="success">success</InlineCode>
				<InlineCode variant="warning">warning</InlineCode>
				<InlineCode variant="danger">danger</InlineCode>
			</div>
		</div>
	{/snippet}
</Story>
