<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import SideBySideLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'alignItems', type: 'select', defaultValue: 'stretch', options: ['start', 'center', 'end', 'stretch'] },
		{ name: 'justifyContent', type: 'select', defaultValue: 'start', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
		{ name: 'responsive', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SideBySideLayout} title="SideBySideLayout" description="Two-section responsive layout container." {controls}>
	{#snippet children(values: any)}
		<SideBySideLayout
			gap={values.gap}
			alignItems={values.alignItems}
			justifyContent={values.justifyContent}
			responsive={values.responsive}
			sections={[
				{ id: 'left', size: '2/3', content: (() => ({ render: () => '<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">Left section</div>' })) as any },
				{ id: 'right', size: '1/3', content: (() => ({ render: () => '<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-4">Right section</div>' })) as any }
			]}
		/>
	{/snippet}
</Story>



