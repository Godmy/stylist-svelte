<script lang="ts">
	interface PortfolioDigitProps {
		value: number | null;
		class?: string;
	}

	let { value, class: className = '' }: PortfolioDigitProps = $props();
</script>

<div class="c-portfolio-digit {className}">
	{#if value !== null && value !== undefined}
		{value}
	{/if}
</div>

<style>
	.c-portfolio-digit {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		height: 100%;
	}
</style>
