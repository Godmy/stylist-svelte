<script lang="ts">
	// @ts-nocheck
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Rating from './index.svelte';

	let rating = $state(3);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'max', type: 'number', defaultValue: 5, min: 3, max: 10, step: 1 },
		{ name: 'readonly', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={Rating} title="Rating" description="Star rating input with readonly and disabled states." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-2">
			<Rating rating={rating} max={values.max} readonly={values.readonly} disabled={values.disabled} size={values.size} onRatingChange={(next) => (rating = next)} />
			<p class="text-sm text-[--color-text-secondary]">Selected rating: {rating}</p>
		</div>
	{/snippet}
</Story>



