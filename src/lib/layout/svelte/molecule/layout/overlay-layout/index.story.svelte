<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import OverlayLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'overlayAlign', type: 'select', defaultValue: 'bottom-right', options: ['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right', 'fill'] },
		{ name: 'overlayPointerEvents', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={OverlayLayout} title="OverlayLayout" description="Stacks absolute-positioned overlay layers on top of a base element." {controls}>
	{#snippet children(values: any)}
		<OverlayLayout
			overlayAlign={values.overlayAlign}
			overlayPointerEvents={values.overlayPointerEvents}
			class="h-48 w-full"
		>
			{#snippet base()}
				<div class="h-full w-full rounded-lg bg-[--color-background-secondary]"></div>
			{/snippet}
			{#snippet overlay()}
				<div class="rounded-md bg-[--color-primary-500] px-2 py-1 text-xs text-white">
					Overlay
				</div>
			{/snippet}
		</OverlayLayout>
	{/snippet}
</Story>
