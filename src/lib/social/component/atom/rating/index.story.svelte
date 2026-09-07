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
	description="Rating input for scoring a visible social item, review target or piece of content."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<article class="_c2">
				<img
					class="_c3"
					src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=720&q=80"
					alt="Workspace preview"
				/>
				<div class="_c4">
					<p class="_c5">Workspace setup review</p>
					<p class="_c6">Rate how useful this shared setup is for a remote product team.</p>
				</div>
			</article>

			<div class="_c7">
				<p class="_c8">Your score</p>
				<Rating
					{rating}
					max={values.max as number}
					readonly={values.readonly as boolean}
					disabled={values.disabled as boolean}
					size={values.size as 'sm' | 'md' | 'lg'}
					onRatingChange={(next: number) => (rating = next)}
				/>
				<p class="_c9">{rating} selected from {values.max}</p>
			</div>

			<div class="_c10">
				<div>
					<p class="_c11">Published average</p>
					<Rating rating={4.2} max={5} readonly={true} size="sm" />
				</div>
				<div>
					<p class="_c11">Locked state</p>
					<Rating rating={2} max={5} disabled={true} size="sm" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: min(100%, 44rem);
		grid-template-columns: minmax(0, 1.1fr) minmax(14rem, 0.9fr);
		gap: 1rem;
		align-items: stretch;
	}

	._c2 {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	._c3 {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		background: var(--color-background-secondary);
	}

	._c4 {
		padding: 1rem;
	}

	._c5,
	._c6,
	._c8,
	._c9,
	._c11 {
		margin: 0;
	}

	._c5 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	._c6,
	._c9,
	._c11 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	._c6 {
		margin-top: 0.25rem;
	}

	._c7 {
		display: grid;
		align-content: center;
		gap: 0.5rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-secondary);
		padding: 1rem;
	}

	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	._c10 {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}

	._c10 > div {
		display: grid;
		gap: 0.375rem;
		border: 1px dashed var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		padding: 0.875rem;
	}

	@media (max-width: 640px) {
		._c1,
		._c10 {
			grid-template-columns: 1fr;
		}
	}
</style>
