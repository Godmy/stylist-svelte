<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import VerticalLayout from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'alignItems', type: 'select', defaultValue: 'stretch', options: ['start', 'center', 'end', 'stretch'] },
		{ name: 'justifyContent', type: 'select', defaultValue: 'start', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
		{ name: 'fillHeight', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={VerticalLayout} title="VerticalLayout" description="Column layout helper for forms and settings pages." {controls}>
	{#snippet children(values: any)}
		<VerticalLayout gap={values.gap} alignItems={values.alignItems} justifyContent={values.justifyContent} fillHeight={values.fillHeight}>
			{#snippet children()}
				<div class="rounded-lg border border-[--color-border-primary] p-3">Header</div>
				<div class="rounded-lg border border-[--color-border-primary] p-3">Body</div>
				<div class="rounded-lg border border-[--color-border-primary] p-3">Footer</div>
			{/snippet}
		</VerticalLayout>
	{/snippet}
</Story>
