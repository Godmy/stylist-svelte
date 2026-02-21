<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SkeletonCircle from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'size', type: 'number', defaultValue: 48, min: 16, max: 180, step: 4 },
		{ name: 'class', type: 'text', defaultValue: '' }
	];
</script>

<Story component={SkeletonCircle} title="SkeletonCircle" description="Circular placeholder for avatars and icon blocks." {controls}>
	{#snippet children(values: any)}
		<div class="flex items-center gap-4 rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-4">
			<SkeletonCircle size={values.size} class={values.class} />
			<div class="space-y-2">
				<div class="h-3 w-28 rounded bg-[--color-skeleton]"></div>
				<div class="h-3 w-20 rounded bg-[--color-skeleton]"></div>
			</div>
		</div>
	{/snippet}
</Story>
