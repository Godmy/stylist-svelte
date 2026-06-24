<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Svg from './index.svelte';

	const layersSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
	const circleSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`;
	const arrowSvg  = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

	const strokeWidths = [1, 1.5, 2, 3] as const;
	const sizes = [16, 24, 32, 48, 64] as const;
</script>

<Story title="Svg" description="Низкоуровневый компонент для рендеринга SVG-разметки через innerHTML">
	<div class="page">

		<section class="section">
			<h2 class="section-title">Базовые формы</h2>
			<div class="row">
				<div class="cell">
					<Svg svg={layersSvg} size={48} />
					<span class="label">layers</span>
				</div>
				<div class="cell">
					<Svg svg={circleSvg} size={48} />
					<span class="label">circle</span>
				</div>
				<div class="cell">
					<Svg svg={arrowSvg} size={48} />
					<span class="label">arrow</span>
				</div>
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Размеры</h2>
			<div class="row align-end">
				{#each sizes as size}
					<div class="cell">
						<Svg svg={arrowSvg} {size} />
						<span class="label">{size}px</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Толщина обводки</h2>
			<div class="row">
				{#each strokeWidths as strokeWidth}
					<div class="cell">
						<Svg svg={circleSvg} size={48} {strokeWidth} />
						<span class="label">sw={strokeWidth}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Accessibility</h2>
			<div class="row">
				<div class="cell">
					<Svg svg={arrowSvg} size={48} aria-label="Стрелка вправо" />
					<span class="label">aria-label задан</span>
				</div>
				<div class="cell">
					<Svg svg={arrowSvg} size={48} />
					<span class="label">aria-hidden (декор.)</span>
				</div>
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">API</h2>
			<table class="api-table">
				<thead>
					<tr>
						<th>Prop</th>
						<th>Тип</th>
						<th>По умолчанию</th>
						<th>Описание</th>
					</tr>
				</thead>
				<tbody>
					<tr><td><code>svg</code></td><td><code>string</code></td><td>—</td><td>SVG-разметка</td></tr>
					<tr><td><code>size</code></td><td><code>number | string</code></td><td>—</td><td>Размер (число → px, строка → как есть)</td></tr>
					<tr><td><code>strokeWidth</code></td><td><code>number</code></td><td>—</td><td>Толщина обводки</td></tr>
					<tr><td><code>class</code></td><td><code>string</code></td><td>''</td><td>CSS-классы на корневом span</td></tr>
					<tr><td><code>aria-label</code></td><td><code>string</code></td><td>—</td><td>Описание для скринридера</td></tr>
				</tbody>
			</table>
		</section>

	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.section-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.align-end {
		align-items: flex-end;
	}

	.cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 1.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-primary);
	}

	.label {
		font-size: 0.7rem;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
	}

	.api-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.8125rem;
	}

	.api-table th,
	.api-table td {
		padding: 0.6rem 0.875rem;
		text-align: left;
		border: 1px solid var(--color-border-primary);
		color: var(--color-text-primary);
	}

	.api-table th {
		background: var(--color-background-secondary);
		font-weight: 600;
	}

	.api-table code {
		font-family: var(--font-mono, monospace);
		font-size: 0.75rem;
		color: var(--color-primary-600);
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.1em 0.35em;
		border-radius: 4px;
	}
</style>
