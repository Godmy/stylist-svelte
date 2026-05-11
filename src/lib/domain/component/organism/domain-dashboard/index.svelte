<script lang="ts">
	import DomainDiagnostics from '$stylist/domain/component/organism/domain-diagnostics/index.svelte';

	interface DomainDashboardProps {
		open?: boolean;
		onClose?: () => void;
		class?: string;
	}

	let { open = false, onClose, class: className = '' }: DomainDashboardProps = $props();
</script>

{#if open}
	<aside class="c-domain-dashboard {className}" aria-label="Domain dashboard">
		<header class="panel-head">
			<div>
				<p class="eyebrow">Dashboard</p>
				<h2>Diagnostics workspace</h2>
			</div>
			<button type="button" class="close-button" onclick={onClose} aria-label="Close dashboard">
				Close
			</button>
		</header>

		<div class="panel-body">
			<DomainDiagnostics compact={false} />
		</div>
	</aside>
{/if}

<style>
	.c-domain-dashboard {
		position: fixed;
		inset: 0.75rem;
		z-index: 30;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 28px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
		);
		box-shadow: 0 28px 80px rgba(15, 23, 42, 0.18);
		overflow: hidden;
	}

	.panel-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1rem 0.85rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		background: color-mix(in srgb, var(--color-background-secondary) 82%, transparent);
	}

	.eyebrow {
		margin: 0 0 0.25rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	h2 {
		margin: 0;
		font-size: 1.05rem;
	}

	.close-button {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 999px;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		padding: 0.65rem 0.9rem;
		font: inherit;
		font-size: 0.82rem;
		cursor: pointer;
	}

	.panel-body {
		min-height: 0;
		padding: 1rem;
		overflow: auto;
	}

	@media (max-width: 840px) {
		.c-domain-dashboard {
			inset: 0.5rem;
			border-radius: 22px;
		}
	}
</style>
