<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import InlineCode from './index.svelte';

	type InlineCodeStoryProps = {
		variant: 'default' | 'success' | 'warning' | 'danger';
	};

	const variantOptions = ['default', 'success', 'warning', 'danger'];

	const controls: ControlConfig[] = [
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'default',
			options: variantOptions
		}
	];
</script>

<Story
	id="atoms-inline-code"
	title="InlineCode"
	component={InlineCode}
	category="Atoms"
	description="InlineCode component for displaying inline formatted code."
	tags={['code', 'syntax', 'highlighting', 'inline']}
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		{@const variant = (props.variant as InlineCodeStoryProps['variant']) ?? 'default'}
		<div>
			This is an example of <InlineCode {variant}>inline code</InlineCode> styling.
		</div>
	{/snippet}
</Story>
