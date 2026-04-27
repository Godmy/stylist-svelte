<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import StrikeThrough from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



