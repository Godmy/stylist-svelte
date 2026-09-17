<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import ExcursionCardFeature from '$stylist/travel-commerce/component/molecule/excursion-card-feature/index.svelte';
	import ExcursionCardStandard from '$stylist/travel-commerce/component/molecule/excursion-card-standard/index.svelte';
	import StoreTrustInsert from '$stylist/travel-commerce/component/organism/store-trust-insert/index.svelte';

	type Props = {
		excursions: Excursion[];
	};

	let { excursions }: Props = $props();
</script>

<div class="tc-store-grid">
	{#if excursions[0]}
		<div class="tc-store-grid__feature">
			<ExcursionCardFeature excursion={excursions[0]} />
		</div>
	{/if}
	{#each excursions.slice(1, 3) as excursion (excursion.id)}
		<ExcursionCardStandard {excursion} />
	{/each}
	<div class="tc-store-grid__wide">
		<StoreTrustInsert />
	</div>
	{#each excursions.slice(3) as excursion (excursion.id)}
		<ExcursionCardStandard {excursion} />
	{/each}
</div>

<style>
	.tc-store-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 18px;
		width: min(1180px, calc(100% - 32px));
		margin: 0 auto;
		padding: 18px 0 80px;
	}
	.tc-store-grid__feature {
		grid-column: span 8;
		grid-row: span 2;
	}
	.tc-store-grid > :global(.tc-excursion-card) {
		grid-column: span 4;
	}
	.tc-store-grid__wide {
		grid-column: 2 / -2;
		margin: 22px 0;
	}
	@media (max-width: 980px) {
		.tc-store-grid__feature,
		.tc-store-grid > :global(.tc-excursion-card),
		.tc-store-grid__wide {
			grid-column: 1 / -1;
		}
	}
	@container (max-width: 980px) {
		.tc-store-grid__feature,
		.tc-store-grid > :global(.tc-excursion-card),
		.tc-store-grid__wide {
			grid-column: 1 / -1;
		}
	}
</style>
