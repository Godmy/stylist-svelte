<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import PromoBanner from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Limited Time Offer' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Get 30% off on all premium plans. Offer ends soon!'
		},
		{ name: 'cta', type: 'text', defaultValue: 'Claim Offer' },
		{
			name: 'variant',
			type: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger'],
			defaultValue: 'success'
		},
		{
			name: 'image',
			type: 'text',
			defaultValue: 'https://placehold.co/150x80/3B82F6/FFFFFF?text=Promo'
		}
	];

	let clicks = $state(0);
</script>

<Story
	id="atoms-promo-banner"
	title="Promo Banner"
	component={PromoBanner}
	category="Atoms"
	description="A promotional banner component."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Promo Banner Example</p>
				<p class="_c4">A promotional banner component.</p>

				<div class="_c5">
					<PromoBanner
						title={values.title}
						description={values.description}
						cta={values.cta}
						variant={values.variant}
						image={values.image}
						onCtaClick={() => clicks++}
					/>
					<p class="_c6">CTA clicks: {clicks}</p>
				</div>
			</div>

			<div class="_c7">
				<h3 class="_c8">Banner Variations</h3>
				<p class="_c9">Different banner configurations with various properties.</p>

				<div class="_c10">
					<article class="_c11">
						<p class="_c12">Success Banner</p>
						<PromoBanner
							title="Special Offer"
							description="Get 50% off on selected items"
							cta="Shop Now"
							variant="success"
							image="https://placehold.co/150x80/10B981/FFFFFF?text=Sale"
							onCtaClick={() => console.log('CTA clicked')}
						/>
					</article>

					<article class="_c11">
						<p class="_c12">Warning Banner</p>
						<PromoBanner
							title="Limited Stock"
							description="Only a few items left in stock"
							cta="Buy Soon"
							variant="warning"
							image="https://placehold.co/150x80/F59E0B/FFFFFF?text=Hurry"
							onCtaClick={() => console.log('CTA clicked')}
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
		margin-top: 1.25rem;
	}
	._c10 > * + * {
		margin-top: 1rem;
	}
	._c11 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c12 {
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
	}
	._c6 {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c7 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c8 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c9 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
