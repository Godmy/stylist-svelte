<script lang="ts">
	interface FunctionalTaxonomyProps {
		domain?: string;
		cluster?: string;
		joint?: string;
		family?: string;
		class?: string;
	}

	let { domain, cluster, joint, family, class: className = '' }: FunctionalTaxonomyProps = $props();
</script>

<div class="c-functional-taxonomy {className}">
	<div class="taxonomy-label">
		<span class="label-tier">domain</span>
		<strong class="label-value">{domain || '-'}</strong>
	</div>
	<div class="taxonomy-label">
		<span class="label-tier">cluster</span>
		<strong class="label-value">{cluster || '-'}</strong>
	</div>
	<div class="taxonomy-label">
		<span class="label-tier">joint</span>
		<strong class="label-value">{joint || '-'}</strong>
	</div>
	<div class="taxonomy-label taxonomy-label--family">
		<span class="label-tier">family</span>
		<strong class="label-value">{family || '-'}</strong>
	</div>
</div>

<style>
	.c-functional-taxonomy {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.28rem;
		padding: 0.4rem 0.35rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.taxonomy-label {
		display: grid;
		gap: 0.12rem;
		min-width: 0;
	}

	.label-tier {
		font-size: 9px;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		line-height: 1;
	}

	.taxonomy-label--family {
		margin-left: -5px;
	}

	.label-value {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: var(--font-mono, monospace);
		font-size: 10px;
		line-height: 1.1;
		color: var(--color-text-primary);
	}
</style>
