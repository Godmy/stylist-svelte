<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CenteredLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'axis', type: 'select', defaultValue: 'both', options: ['both', 'horizontal', 'vertical'] },
		{ name: 'fillHeight', type: 'boolean', defaultValue: true },
		{ name: 'fillWidth', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={CenteredLayout} title="CenteredLayout" description="Centers content along one or both axes." {controls}>
	{#snippet children(values: any)}
		<CenteredLayout
			axis={values.axis}
			fillHeight={values.fillHeight}
			fillWidth={values.fillWidth}
			class="h-48 border border-[--color-border-primary] rounded-lg"
		>
			{#snippet children()}
				<div class="rounded-lg border border-[--color-border-primary] px-4 py-2 text-sm">
					Centered content
				</div>
			{/snippet}
		</CenteredLayout>
	{/snippet}
</Story>
