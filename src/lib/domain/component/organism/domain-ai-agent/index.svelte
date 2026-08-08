<script lang="ts">
	interface DomainAiAgentProps {
		open?: boolean;
		onClose?: () => void;
		class?: string;
	}

	let { open = false, onClose, class: className = '' }: DomainAiAgentProps = $props();
</script>

{#if open}
	<aside class="c-domain-ai-agent {className}" aria-label="AI agent">
		<header class="panel-head">
			<div>
				<p class="eyebrow">AI</p>
				<h2>AI agent</h2>
			</div>
			<button type="button" class="close-button" onclick={onClose} aria-label="Close AI agent panel">
				Close
			</button>
		</header>

		<div class="panel-body">
			<p class="empty-state">The AI agent workspace is not wired up yet.</p>
		</div>
	</aside>
{/if}

<style>
	.c-domain-ai-agent {
		position: fixed;
		top: 5.25rem;
		right: 0.7rem;
		z-index: 30;
		width: min(calc(30rem + 4px), calc(100vw - 2rem));
		max-height: calc(100vh - 6.25rem);
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 24px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
		);
		box-shadow: 0 28px 80px rgba(15, 23, 42, 0.16);
		overflow: hidden;
	}

	.panel-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1rem 0.85rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
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
		overflow-y: auto;
		overflow-x: hidden;
	}

	.empty-state {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: 13px;
	}

	@media (max-width: 840px) {
		.c-domain-ai-agent {
			top: 6.5rem;
			right: 0.75rem;
			left: 0.75rem;
			width: auto;
		}
	}
</style>
