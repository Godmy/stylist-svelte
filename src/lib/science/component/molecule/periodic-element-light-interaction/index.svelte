<script lang="ts">
	import type { RecipePeriodicElementLightInteraction } from '$stylist/science/interface/recipe/periodic-element-light-interaction';

	let props: RecipePeriodicElementLightInteraction = $props();
</script>

<section class="c-periodic-element-light-interaction {props.class ?? ''}">
	<header>
		<p>light interaction</p>
		<h3>Spectrum, absorption, activation</h3>
	</header>

	<div class="c-periodic-element-light-interaction__grid">
		<article>
			<span>Spectral signature</span>
			<p>{props.interaction.spectralSignature}</p>
		</article>

		<article>
			<span>Absorption</span>
			<p>{props.interaction.absorptionBehavior}</p>
		</article>

		<article>
			<span>Activation</span>
			<p>{props.interaction.activationBehavior}</p>
		</article>

		<article>
			<span>Photoresponse</span>
			<p>{props.interaction.photoresponse}</p>
		</article>
	</div>

	<div class="c-periodic-element-light-interaction__lists">
		<div>
			<h4>Diagnostic lines</h4>
			<div>
				{#each props.interaction.diagnosticLines as line}
					<span>{line}</span>
				{/each}
			</div>
		</div>

		<div>
			<h4>Applications</h4>
			<div>
				{#each props.interaction.applications as application}
					<span>{application}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.c-periodic-element-light-interaction {
		display: grid;
		gap: 0.75rem;
		padding: 0.85rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: color-mix(in srgb, var(--color-background-primary) 92%, #2d6f9f);
	}

	.c-periodic-element-light-interaction header,
	.c-periodic-element-light-interaction header p,
	.c-periodic-element-light-interaction header h3,
	.c-periodic-element-light-interaction article p,
	.c-periodic-element-light-interaction__lists h4 {
		margin: 0;
	}

	.c-periodic-element-light-interaction header p,
	.c-periodic-element-light-interaction article span {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.72rem;
		text-transform: uppercase;
	}

	.c-periodic-element-light-interaction header h3 {
		font-size: 1rem;
		font-weight: 650;
	}

	.c-periodic-element-light-interaction__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 0.55rem;
	}

	.c-periodic-element-light-interaction article {
		display: grid;
		gap: 0.25rem;
		min-width: 0;
		padding: 0.65rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
	}

	.c-periodic-element-light-interaction article p {
		color: var(--color-text-primary);
		font-size: 0.84rem;
		line-height: 1.45;
	}

	.c-periodic-element-light-interaction__lists {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 0.55rem;
	}

	.c-periodic-element-light-interaction__lists > div {
		display: grid;
		gap: 0.4rem;
	}

	.c-periodic-element-light-interaction__lists h4 {
		font-size: 0.82rem;
		font-weight: 650;
	}

	.c-periodic-element-light-interaction__lists div div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.c-periodic-element-light-interaction__lists span {
		padding: 0.22rem 0.45rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 999px;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.68rem;
	}
</style>
