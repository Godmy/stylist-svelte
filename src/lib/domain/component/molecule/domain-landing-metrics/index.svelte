<script lang="ts">
	import DomainLandingMetricCard from '$stylist/domain/component/atom/domain-landing-metric-card/index.svelte';

	let {
		rootDomainCount = 0,
		storyModuleCount = 0
	}: {
		rootDomainCount?: number;
		storyModuleCount?: number;
	} = $props();
</script>

<div class="hero-metrics">
	<DomainLandingMetricCard value={rootDomainCount} label="root domains" />
	<DomainLandingMetricCard value={storyModuleCount} label="story modules" />
</div>

<style>
	.hero-metrics {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
	}

	@media (max-width: 900px) {
		.hero-metrics {
			grid-template-columns: 1fr;
		}
	}
</style>
