<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import Caption from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'content', type: 'text', defaultValue: 'Caption text' },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="atoms-caption"
	title="Caption"
	component={Caption}
	category="Atoms/Information/Typography/Text"
	description="Caption text with variant and size controls"
	{controls}
>
	{#snippet children(values: any)}
		<div class="space-y-5 p-4">
			<Caption
				variant={values.variant as any}
				size={values.size as 'sm' | 'md' | 'lg'}
				disabled={values.disabled as boolean}
				block={values.block as boolean}
			>
				{values.content as string}
			</Caption>

			<div class="grid gap-2 text-sm text-[var(--color-text-secondary)]">
				<p>State preview:</p>
				<p>variant={values.variant}, size={values.size}, disabled={String(values.disabled)}, block={String(values.block)}</p>
			</div>
		</div>
	{/snippet}
</Story>




