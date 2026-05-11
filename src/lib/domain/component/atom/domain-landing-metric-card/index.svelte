<script lang="ts">
	let { value, label }: { value: number; label: string } = $props();
</script>

<div class="metric-card">
	<strong>{value}</strong>
	<span>{label}</span>
</div>

<style>
	.metric-card {
		display: grid;
		gap: 0.25rem;
		padding: 0.95rem 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 20px;
		background: color-mix(in srgb, var(--color-background-primary) 90%, white 10%);
		box-shadow: 0 16px 42px rgba(15, 23, 42, 0.05);
	}

	.metric-card strong {
		font-size: 2rem;
		line-height: 1;
	}

	.metric-card span {
		font-size: 0.76rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}
</style>
