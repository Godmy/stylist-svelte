<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PageEllipsis from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'class', type: 'text', defaultValue: '' }
	];
</script>

<Story component={PageEllipsis} title="PageEllipsis" description="Pagination overflow marker between distant page buttons." {controls}>
	{#snippet children(values: any)}
		<nav class="flex items-center gap-2">
			<button class="rounded border px-3 py-1 text-sm">1</button>
			<PageEllipsis class={values.class} />
			<button class="rounded border px-3 py-1 text-sm">8</button>
			<button class="rounded border bg-[--color-primary-600] px-3 py-1 text-sm text-white">9</button>
			<button class="rounded border px-3 py-1 text-sm">10</button>
			<PageEllipsis class={values.class} />
			<button class="rounded border px-3 py-1 text-sm">24</button>
		</nav>
	{/snippet}
</Story>
