<script lang="ts">
	interface PortfolioHeaderProps {
		class?: string;
	}

	let { class: className = '' }: PortfolioHeaderProps = $props();
</script>

<tr class="c-portfolio-header {className}">
	<th class="_th _th-num">№</th>
	<th class="_th _th-name">ПОРТФЕЛЬ ПРОЕКТОВ</th>
	<th class="_th _th-status">НОВЫЕ</th>
	<th class="_th _th-status">ПЛАН</th>
	<th class="_th _th-status">ОЦЕНКА</th>
	<th class="_th _th-status">В РАБОТЕ</th>
	<th class="_th _th-status">ТЕСТ</th>
	<th class="_th _th-status">ПРИЁМКА</th>
	<th class="_th _th-status">ОТЛОЖЕНО</th>
	<th class="_th _th-status">ОТКРЫТО</th>
	<th class="_th _th-status">ЗАКРЫТО</th>
	<th class="_th _th-percent">%</th>
</tr>

<style>
	.c-portfolio-header {
		background: color-mix(in srgb, var(--color-background-secondary) 90%, transparent);
	}

	._th {
		padding: 0.625rem 0.375rem;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		text-align: center;
		border-bottom: 2px solid var(--color-border-primary);
		white-space: nowrap;
		user-select: none;
	}

	._th-name {
		text-align: left;
		padding-left: 0.625rem;
	}

	._th-num,
	._th-percent {
		width: 2.5rem;
	}

	._th-status {
		width: 7rem;
	}
</style>
