<script lang="ts">
	interface DomainBacklogProps {
		title?: string;
		path?: string;
		content?: string;
		loading?: boolean;
		error?: string;
		class?: string;
	}

	let {
		title = 'Backlog',
		path = '',
		content = '',
		loading = false,
		error = '',
		class: className = ''
	}: DomainBacklogProps = $props();
</script>

<section class="c-domain-backlog {className}" aria-label="Domain backlog">
	<header class="panel-head">
		<div>
			<p class="eyebrow">Backlog</p>
			<h2>{title}</h2>
			{#if path}<p class="panel-path">{path}</p>{/if}
		</div>
	</header>

	<div class="panel-body">
		{#if loading}
			<p class="panel-status">Loading...</p>
		{:else if content.trim()}
			<pre class="panel-content">{content}</pre>
		{:else}
			<p class="panel-status">Backlog is empty.</p>
		{/if}

		{#if error}
			<p class="panel-error">{error}</p>
		{/if}
	</div>
</section>

<style>
	.c-domain-backlog {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		min-height: 100vh;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 28px;
		background:
			radial-gradient(circle at top, rgba(148, 163, 184, 0.14), transparent 34%),
			linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
		color: var(--color-foreground-primary, #0f172a);
	}

	.panel-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.2rem 1.2rem 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 24px;
		background:
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
				color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
			);
		box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
	}

	.eyebrow {
		margin: 0 0 0.3rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	h2 {
		margin: 0;
		font-size: 1.15rem;
	}

	.panel-path {
		margin: 0.35rem 0 0;
		font-family: var(--font-mono, monospace);
		font-size: 0.78rem;
		line-height: 1.45;
		color: var(--color-text-secondary);
		word-break: break-all;
	}

	.panel-body {
		min-height: 0;
		padding: 1rem 0 0;
		display: grid;
		gap: 0.85rem;
		overflow: auto;
	}

	.panel-content {
		margin: 0;
		white-space: pre-wrap;
		word-break: break-word;
		padding: 1rem 1.1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 18px;
		background: color-mix(in srgb, var(--color-background-primary) 94%, transparent);
		color: inherit;
		font: inherit;
		line-height: 1.6;
	}

	.panel-status,
	.panel-error {
		margin: 0;
		font-size: 0.88rem;
	}

	.panel-error {
		color: #b91c1c;
	}

	@media (max-width: 840px) {
		.c-domain-backlog {
			padding: 0.75rem;
			border-radius: 22px;
		}

		.panel-head,
		.panel-body {
			padding-inline: 0.9rem;
		}
	}
</style>
