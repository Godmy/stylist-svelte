<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import Rating from './index.svelte';

	let rating = $state(3);

	const controls: SlotStory[] = [
		{ name: 'max', type: 'number', defaultValue: 5, min: 3, max: 10, step: 1 },
		{ name: 'readonly', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story
	component={Rating}
	title="Rating"
	description="Star rating input with readonly and disabled states."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Rating
				{rating}
				max={values.max as number}
				readonly={values.readonly as boolean}
				disabled={values.disabled as boolean}
				size={values.size as 'sm' | 'md' | 'lg'}
				onRatingChange={(next: number) => (rating = next)}
			/>
			<p class="_c2">Selected rating: {rating}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 0.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
