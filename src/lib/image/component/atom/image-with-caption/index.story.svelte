<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import ImageWithCaption from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'src', type: 'text', defaultValue: 'https://placehold.co/640x360' },
		{ name: 'alt', type: 'text', defaultValue: 'Example image' },
		{ name: 'caption', type: 'text', defaultValue: 'Example caption' },
		{ name: 'rounded', type: 'boolean', defaultValue: false },
		{ name: 'bordered', type: 'boolean', defaultValue: true },
		{ name: 'shadow', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="atoms-image-with-caption"
	title="Image With Caption"
	component={ImageWithCaption}
	category="Atoms"
	description="An image component with caption and styling options."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Image With Caption Example</p>
				<p class="_c4">An image component with caption and styling options.</p>

				<div class="_c5">
					<ImageWithCaption
						src={values.src}
						alt={values.alt}
						caption={values.caption}
						rounded={values.rounded}
						bordered={values.bordered}
						shadow={values.shadow}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Image With Caption Variations</h3>
				<p class="_c8">Different image with caption configurations with various properties.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">With Rounded Corners</p>
						<ImageWithCaption
							src="https://placehold.co/640x360/3b82f6/ffffff?text=Rounded"
							alt="Rounded image"
							caption="Image with rounded corners"
							rounded={true}
							bordered={true}
							shadow={true}
						/>
					</article>

					<article class="_c10">
						<p class="_c11">Without Border</p>
						<ImageWithCaption
							src="https://placehold.co/640x360/ef4444/ffffff?text=No+Border"
							alt="No border image"
							caption="Image without border"
							rounded={false}
							bordered={false}
							shadow={true}
						/>
					</article>

					<article class="_c10">
						<p class="_c11">Without Shadow</p>
						<ImageWithCaption
							src="https://placehold.co/640x360/10b981/ffffff?text=No+Shadow"
							alt="No shadow image"
							caption="Image without shadow"
							rounded={true}
							bordered={true}
							shadow={false}
						/>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
