<script lang="ts">
	import DomainLandingFeatureCard from '$stylist/domain/component/atom/domain-landing-feature-card/index.svelte';
</script>

<div class="feature-grid">
	<DomainLandingFeatureCard
		title="Domain explorer"
		description="Open the full taxonomy tree, switch files and inspect implementation in context."
		iconName="domain"
		tone="domain"
	/>
	<DomainLandingFeatureCard
		title="Diagnostics"
		description="Run story diagnostics across the library and surface breakages before release."
		iconName="diagnostics"
		tone="diagnostics"
	/>
	<DomainLandingFeatureCard
		title="Backlog"
		description="Review the active family backlog without disconnecting decisions from structure."
		iconName="backlog"
		tone="backlog"
	/>
</div>

<style>
	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	@media (max-width: 900px) {
		.feature-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
