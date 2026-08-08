<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import Image from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'src',
			type: 'text',
			defaultValue: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Main+Image'
		},
		{ name: 'alt', type: 'text', defaultValue: 'Sample image' },
		{
			name: 'fallback',
			type: 'text',
			defaultValue: 'https://via.placeholder.com/600x400/94a3b8/ffffff?text=Fallback+Image'
		},
		{ name: 'loading', type: 'select', options: ['lazy', 'eager'], defaultValue: 'lazy' },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
		{ name: 'width', type: 'text', defaultValue: '' },
		{ name: 'height', type: 'text', defaultValue: '' }
	];
</script>

<Story
	id="atoms-image"
	title="Image"
	component={Image}
	category="Atoms"
	description="An image component with fallback and sizing options."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Image Example</p>
				<p class="_c4">An image component with fallback and sizing options.</p>

				<div class="_c5">
					<Image
						src={values.src}
						alt={values.alt}
						fallback={values.fallback}
						loading={values.loading}
						width={values.width || undefined}
						height={values.height || undefined}
						size={values.size}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Image Variations</h3>
				<p class="_c8">Different image configurations with various properties.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">All Sizes</p>
						<div class="_c12">
							<div class="_c13">
								<Image
									src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=SM"
									size="sm"
									alt="Small image"
								/>
								<span class="_c14">Small</span>
							</div>
							<div class="_c13">
								<Image
									src="https://via.placeholder.com/400x300/1d4ed8/ffffff?text=MD"
									size="md"
									alt="Medium image"
								/>
								<span class="_c14">Medium</span>
							</div>
							<div class="_c13">
								<Image
									src="https://via.placeholder.com/600x400/1e40af/ffffff?text=LG"
									size="lg"
									alt="Large image"
								/>
								<span class="_c14">Large</span>
							</div>
							<div class="_c13">
								<Image
									src="https://via.placeholder.com/800x600/1e3a8a/ffffff?text=XL"
									size="xl"
									alt="Extra Large image"
								/>
								<span class="_c14">Extra Large</span>
							</div>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Fallback Example</p>
						<div class="_c15">
							<div class="_c13">
								<Image
									src="https://invalid-url-for-testing.com/image.jpg"
									fallback="https://via.placeholder.com/300x200/f59e0b/ffffff?text=Fallback"
									size="md"
									alt="Image with fallback"
								/>
								<span class="_c14">With Fallback</span>
							</div>
							<div class="_c13">
								<Image
									src="https://via.placeholder.com/300x200/10b981/ffffff?text=Normal"
									size="md"
									alt="Normal image"
								/>
								<span class="_c14">Normal</span>
							</div>
						</div>
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
	._c12 {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	._c13 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	._c14 {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c15 {
		display: flex;
		align-items: center;
		gap: 1rem;
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
