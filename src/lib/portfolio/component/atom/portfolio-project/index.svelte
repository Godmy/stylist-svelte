<script lang="ts">
	interface PortfolioProjectProps {
		name: string;
		class?: string;
	}

	let { name, class: className = '' }: PortfolioProjectProps = $props();
</script>

<div class="c-portfolio-project {className}" title={name}>
	{name}
</div>

<style>
	.c-portfolio-project {
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 0.625rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
