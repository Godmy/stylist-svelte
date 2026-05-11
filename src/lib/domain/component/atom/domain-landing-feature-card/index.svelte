<script lang="ts">
	import Icon from '$stylist/media/component/atom/icon/index.svelte';

	let {
		title,
		description,
		iconName,
		tone
	}: {
		title: string;
		description: string;
		iconName: string;
		tone: 'domain' | 'diagnostics' | 'backlog';
	} = $props();
</script>

<article class={`feature-card feature-card--${tone}`}>
	<div class="feature-icon">
		<Icon name={iconName} size={20} />
	</div>
	<div>
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
</article>

<style>
	.feature-card {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 0.9rem;
		padding: 1.05rem;
		position: relative;
		overflow: hidden;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 22px;
		background: color-mix(in srgb, var(--color-background-primary) 90%, white 10%);
		box-shadow: 0 16px 42px rgba(15, 23, 42, 0.05);
	}

	.feature-card::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 3px;
		opacity: 0.9;
	}

	.feature-card--domain::after {
		background: linear-gradient(90deg, #2563eb, #0ea5e9);
	}

	.feature-card--diagnostics::after {
		background: linear-gradient(90deg, #f97316, #f59e0b);
	}

	.feature-card--backlog::after {
		background: linear-gradient(90deg, #16a34a, #22c55e);
	}

	.feature-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		border-radius: 14px;
		background: color-mix(in srgb, var(--color-primary-500) 12%, var(--color-background-primary));
		color: var(--color-primary-600);
	}

	h2 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
	}

	p {
		margin: 0;
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--color-text-secondary);
	}
</style>
