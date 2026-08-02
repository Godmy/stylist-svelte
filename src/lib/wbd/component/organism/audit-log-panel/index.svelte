<script lang="ts">
	import createWbdAuditLogPanelState from '$stylist/wbd/function/state/audit-log-panel/index.svelte';
	import type { RecipeWbdAuditLogPanel } from '$stylist/wbd/interface/recipe/audit-log-panel';

	let props: RecipeWbdAuditLogPanel = $props();
	const state = createWbdAuditLogPanelState(props);
</script>

<section class="wbd-audit-log {state.className}">
	<header>Audit log</header>
	<div>
		{#each state.entries as entry (entry.id)}
			<article>
				<span>{entry.createdAt}</span>
				<strong>{entry.actorLabel}</strong>
				<p>{entry.action}</p>
				<small>{entry.entityType}{entry.entityLabel ? ` · ${entry.entityLabel}` : ''}</small>
			</article>
		{/each}
	</div>
</section>

<style>
	.wbd-audit-log {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-audit-log header {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-audit-log div {
		display: grid;
		gap: 0.5rem;
	}
	.wbd-audit-log article {
		display: grid;
		grid-template-columns: 8rem 10rem minmax(0, 1fr) auto;
		gap: 0.75rem;
		align-items: center;
		padding: 0.625rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
	}
	.wbd-audit-log span,
	.wbd-audit-log small {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-audit-log strong,
	.wbd-audit-log p {
		margin: 0;
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	@media (max-width: 760px) {
		.wbd-audit-log article {
			grid-template-columns: 1fr;
		}
	}
</style>
