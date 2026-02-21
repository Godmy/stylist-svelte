<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Superscript from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'content', type: 'text', defaultValue: 'x2' },
		{ name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'primary' },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];
</script>

<Story {controls} component={Superscript} title="Superscript" category="Atoms/Information/Typography/Text" description="Superscript typography component">
	{#snippet children(values: any)}
		<Superscript variant={values.variant as any} size={values.size as 'sm' | 'md' | 'lg'} disabled={values.disabled as boolean} block={values.block as boolean}>
			{values.content as string}
		</Superscript>
	{/snippet}
</Story>
