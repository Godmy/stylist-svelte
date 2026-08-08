<script lang="ts">
	interface NameHeroMediaItemsProps {
		items: [string, string][];
		ariaLabel: string;
		class?: string;
	}

	let { items, ariaLabel, class: className = '' }: NameHeroMediaItemsProps = $props();
</script>

<section class="name-hero-media-items {className}" aria-label={ariaLabel}>
	<div class="name-hero-media-items__grid">
		{#each items as item}
			<div class="name-hero-media-items__item">
				<strong>{item[0]}</strong>
				<span>{item[1]}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.name-hero-media-items__grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--name-hero-media-items-gap, 0.75rem);
	}

	.name-hero-media-items__item {
		min-height: var(--name-hero-media-items-min-height, 7.25rem);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.75rem;
		padding: var(--name-hero-media-items-padding, 1rem);
		border: 1px solid var(--name-hero-media-items-border, currentColor);
		border-radius: 0.5rem;
		background: var(--name-hero-media-items-background, transparent);
	}

	.name-hero-media-items__item strong {
		color: var(--name-hero-media-items-name, currentColor);
		font-size: var(--name-hero-media-items-name-size, 1.45rem);
		line-height: 1.1;
	}

	.name-hero-media-items__item span {
		color: var(--name-hero-media-items-text, currentColor);
		font-size: var(--name-hero-media-items-text-size, 0.9rem);
		line-height: 1.45;
	}

	@container (max-width: 680px) {
		.name-hero-media-items__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
