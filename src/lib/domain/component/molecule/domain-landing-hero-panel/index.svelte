<div class="hero-panel hero-panel--primary">
	<p class="hero-panel-label">Why it matters</p>
	<ul class="hero-list">
		<li>Reduce navigation overhead in large component libraries</li>
		<li>Keep architecture visible while reviewing real implementation files</li>
		<li>Connect diagnostics and backlog context to the active family</li>
	</ul>
</div>

<style>
	.hero-panel {
		display: grid;
		gap: 0.8rem;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 24px;
		background: color-mix(in srgb, var(--color-background-primary) 90%, white 10%);
		box-shadow: 0 16px 42px rgba(15, 23, 42, 0.05);
	}

	.hero-panel--primary {
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-primary-500) 10%, var(--color-background-primary)) 0%,
			color-mix(in srgb, var(--color-background-primary) 92%, white 8%) 100%
		);
	}

	.hero-panel-label {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.hero-list {
		margin: 0;
		padding-left: 1rem;
		display: grid;
		gap: 0.6rem;
		color: var(--color-text-secondary);
		line-height: 1.55;
	}
</style>
