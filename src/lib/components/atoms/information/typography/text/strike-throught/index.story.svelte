<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import StrikeThrough from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'content', type: 'text', defaultValue: 'Deprecated value' },
		{ name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'primary' },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={StrikeThrough}
	title="StrikeThrough"
	category="Atoms/Information/Typography/Text"
	description="Strikethrough typography component"
>
	{#snippet children(values: any)}
		<StrikeThrough
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			block={values.block as boolean}
		>
			{values.content as string}
		</StrikeThrough>
	{/snippet}
</Story>
