<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Drawer from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'open', type: 'boolean', defaultValue: true },
		{ name: 'position', type: 'select', defaultValue: 'right', options: ['left', 'right', 'top', 'bottom'] },
		{ name: 'size', type: 'text', defaultValue: '320px' },
		{ name: 'closable', type: 'boolean', defaultValue: true },
		{ name: 'showBackdrop', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={Drawer} title="Drawer" description="Slide-in panel for secondary navigation and settings." {controls}>
	{#snippet children(values: any)}
		<Drawer open={values.open} position={values.position} size={values.size} closable={values.closable} showBackdrop={values.showBackdrop}>
			<div slot="header"><h2 class="text-base font-semibold">Quick settings</h2></div>
			<div class="space-y-2 text-sm"><p>Notifications</p><p>Theme</p><p>Privacy</p></div>
			<div slot="actions" class="flex gap-2"><button class="rounded border px-3 py-1 text-sm">Cancel</button><button class="rounded bg-[--color-primary-600] px-3 py-1 text-sm text-white">Save</button></div>
		</Drawer>
	{/snippet}
</Story>
