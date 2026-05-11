<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<div class="hero-point">
	<strong>{title}</strong>
	<span>{description}</span>
</div>

<style>
	.hero-point {
		display: grid;
		gap: 0.35rem;
		padding: 0.95rem 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 20px;
		background: color-mix(in srgb, var(--color-background-primary) 90%, white 10%);
		box-shadow: 0 16px 42px rgba(15, 23, 42, 0.05);
	}

	.hero-point strong {
		font-size: 0.95rem;
	}

	.hero-point span {
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--color-text-secondary);
	}
</style>
