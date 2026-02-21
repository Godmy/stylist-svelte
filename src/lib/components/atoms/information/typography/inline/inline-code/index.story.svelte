<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import InlineCode from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger'];

	const controls: ControlConfig[] = [
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
				This is an example of <InlineCode variant={values.variant}>inline code</InlineCode> styling.
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





