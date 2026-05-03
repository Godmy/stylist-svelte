<script lang="ts">
	import { ThemeModeToggle } from '$stylist/theme/component/atom';
	import { ALL_PAGES } from './_lib/all-pages';
	import type { PageCard } from './_lib/all-pages';

	type HomeCard = {
		label: string;
		href: string;
		description: string;
		eyebrow: string;
	};

	type HomeMetric = {
		value: string;
		label: string;
	};

	const featuredPageIds = ['stylist', 'interaction', 'layout', 'models-graph-components'];
	const libraryPageIds = [
		'dashboard',
		'architecture',
		'contracts',
		'themes',
		'tokens',
		'colors',
		'typography',
		'diagnostics',
		'icons',
		'json',
		'playground'
	];

	const pageById = new Map(ALL_PAGES.map((page) => [page.id, page]));
	const toHomeCard = (page: PageCard): HomeCard => ({
		label: page.label,
		href: page.href,
		description: page.description,
		eyebrow: page.eyebrow
	});
	const isPageCard = (page: PageCard | undefined): page is PageCard => Boolean(page);
	const featuredCards = featuredPageIds
		.map((id) => pageById.get(id))
		.filter(isPageCard)
		.map(toHomeCard);
	const libraryCards = libraryPageIds
		.map((id) => pageById.get(id))
		.filter(isPageCard)
		.map(toHomeCard);

	const libraryMetrics: HomeMetric[] = [
		{ value: '1092', label: 'UI-компонента' },
		{ value: '29', label: 'предметных доменов' },
		{ value: '3', label: 'уровня: atom, molecule, organism' }
	];

	const architectureFacts = [
		'386 атомов образуют базовые примитивы без тяжелых внешних зависимостей.',
		'331 молекула собирает атомы в локальные сценарии с собственным поведением.',
		'374 организма закрывают прикладные UI-блоки с бизнес-логикой и контрактами данных.'
	];
</script>

<svelte:head>
	<title>Stylist - Svelte UI Library</title>
	<meta
		name="description"
		content="Главная страница Stylist: Svelte UI library, домены, токены, темы и демонстрации компонентов."
	/>
</svelte:head>

<main class="page">
	<section class="hero" aria-labelledby="home-title">
		<div class="hero-copy">
			<p class="eyebrow">Stylist / Svelte UI Library</p>
			<h1 id="home-title">Рабочая карта компонентной библиотеки.</h1>
			<p class="lede">
				Главная страница собирает входы в домены Stylist: живые демонстрации, архитектуру,
				контракты, темы, токены и отчеты. Это не витрина, а стартовая панель для разработки и
				аудита.
			</p>
			<div class="hero-actions" aria-label="Главные действия">
				<a class="action action--primary" href="/stylist">Открыть Stylist</a>
				<a class="action" href="/dashboard">Смотреть dashboard</a>
			</div>
		</div>

		<div class="hero-map" aria-label="Схема библиотеки">
			<div class="map-node map-node--primary">
				<span>Stylist</span>
				<strong>Library core</strong>
			</div>
			<div class="map-row">
				<span>data</span>
				<span>const</span>
				<span>type</span>
				<span>interface</span>
			</div>
			<div class="map-row">
				<span>class</span>
				<span>function</span>
				<span>component</span>
			</div>
			<div class="map-grid">
				{#each libraryMetrics as metric}
					<div class="metric-item">
						<strong>{metric.value}</strong>
						<span>{metric.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="section" aria-labelledby="demo-title">
		<div class="section-head">
			<p class="kicker">Живые демо</p>
			<h2 id="demo-title">Компоненты в действии</h2>
		</div>

		<div class="card-grid card-grid--featured">
			{#each featuredCards as card}
				<a class="card card--featured" href={card.href}>
					<span class="card-eyebrow">{card.eyebrow}</span>
					<h3>{card.label}</h3>
					<p>{card.description}</p>
					<span class="card-link">Открыть</span>
				</a>
			{/each}
		</div>
	</section>

	<section class="section section--split" aria-labelledby="architecture-title">
		<article class="feature-band">
			<p class="kicker">Архитектура</p>
			<h2 id="architecture-title">Atomic Design в масштабе</h2>
			<div class="step-list">
				{#each architectureFacts as fact}
					<div class="step-item">
						<span class="step-index"></span>
						<p>{fact}</p>
					</div>
				{/each}
			</div>
		</article>

		<article class="feature-band feature-band--accent">
			<p class="kicker">Темизация</p>
			<h2>Токены и режимы отображения</h2>
			<p>
				Компоненты работают через дизайн-токены. Смена режима или схемы должна проходить через
				единый тематический слой, без ручного переписывания стилей компонентов.
			</p>
			<div class="theme-utility">
				<div class="theme-utility-copy">
					<span>Быстрое переключение</span>
					<strong>ThemeModeToggle</strong>
				</div>
				<ThemeModeToggle currentTheme="default" />
			</div>
			<a class="inline-link" href="/themes/settings">Настройки тем</a>
		</article>
	</section>

	<section class="section" aria-labelledby="navigation-title">
		<div class="section-head">
			<p class="kicker">Навигация</p>
			<h2 id="navigation-title">Разделы библиотеки</h2>
		</div>

		<div class="card-grid">
			{#each libraryCards as card}
				<a class="card" href={card.href}>
					<span class="card-eyebrow">{card.eyebrow}</span>
					<h3>{card.label}</h3>
					<p>{card.description}</p>
				</a>
			{/each}
		</div>
	</section>
</main>

<style>
	:global(html, body) {
		margin: 0;
		min-height: 100%;
	}

	:global(body) {
		background:
			linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
			linear-gradient(180deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
			linear-gradient(
				180deg,
				var(--color-background-primary, #f8fafc) 0%,
				var(--color-background-secondary, #eef2f7) 100%
			);
		background-size:
			32px 32px,
			32px 32px,
			auto;
		color: var(--color-foreground-primary, #0f172a);
	}

	.page {
		min-height: 100vh;
		max-width: 1240px;
		margin: 0 auto;
		padding: 3rem clamp(1rem, 2vw, 1.5rem) 4rem;
		display: grid;
		gap: 2rem;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
		gap: clamp(1.25rem, 3vw, 3rem);
		align-items: center;
		min-height: min(720px, calc(100vh - 6rem));
		padding-bottom: 1rem;
	}

	.hero-copy {
		display: grid;
		gap: 1.1rem;
	}

	.hero-map {
		display: grid;
		gap: 0.85rem;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 78%, transparent);
		background: color-mix(in srgb, var(--color-background-primary, #ffffff) 92%, transparent);
		box-shadow: 0 18px 48px rgba(15, 23, 42, 0.1);
	}

	.map-node,
	.map-row span,
	.metric-item,
	.feature-band,
	.card {
		border-radius: 8px;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 80%, transparent);
		background: color-mix(in srgb, var(--color-background-primary, #ffffff) 88%, transparent);
	}

	.map-node {
		display: grid;
		gap: 0.2rem;
		padding: 1rem;
	}

	.map-node--primary {
		background: #0f172a;
		border-color: #0f172a;
		color: white;
	}

	.map-node span,
	.map-row span,
	.metric-item span {
		color: var(--color-foreground-secondary, #64748b);
	}

	.map-node--primary span {
		color: rgba(255, 255, 255, 0.72);
	}

	.map-row {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.65rem;
	}

	.map-row + .map-row {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.map-row span {
		padding: 0.75rem;
		text-align: center;
		font-size: 0.8rem;
		font-weight: 700;
	}

	.map-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.65rem;
	}

	.metric-item {
		display: grid;
		gap: 0.25rem;
		padding: 0.9rem;
		min-height: 88px;
	}

	.metric-item strong {
		font-size: 1.5rem;
		line-height: 1;
	}

	.section {
		display: grid;
		gap: 1rem;
	}

	.section--split {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
	}

	.section-head,
	.feature-band,
	.theme-utility-copy {
		display: grid;
		gap: 0.35rem;
	}

	.feature-band {
		padding: 1.2rem;
		box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
	}

	.feature-band--accent {
		background: color-mix(in srgb, var(--color-background-primary, #ffffff) 82%, #e0f2fe 18%);
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: 1rem;
	}

	.card-grid--featured {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.card {
		display: grid;
		gap: 0.65rem;
		padding: 1rem;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06);
		transition:
			transform 0.18s ease,
			border-color 0.18s ease,
			box-shadow 0.18s ease;
	}

	.card:hover,
	.card:focus-visible {
		transform: translateY(-2px);
		border-color: color-mix(in srgb, var(--color-border-primary, #94a3b8) 58%, #0f172a 42%);
		box-shadow: 0 18px 44px rgba(15, 23, 42, 0.11);
		outline: none;
	}

	.card--featured {
		min-height: 180px;
	}

	.eyebrow,
	.kicker,
	.card-eyebrow,
	.theme-utility-copy span {
		margin: 0;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--color-foreground-secondary, #64748b);
	}

	h1,
	h2,
	h3,
	p {
		margin: 0;
	}

	h1 {
		font-size: clamp(3rem, 6vw, 6.2rem);
		line-height: 0.94;
		max-width: 10ch;
	}

	h2 {
		font-size: 1.55rem;
		line-height: 1.08;
	}

	h3 {
		font-size: 1.12rem;
		line-height: 1.15;
	}

	.lede,
	.card p,
	.feature-band p,
	.step-item p {
		color: var(--color-foreground-secondary, #475569);
		line-height: 1.6;
	}

	.lede {
		max-width: 64ch;
		font-size: 1.05rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.action,
	.inline-link,
	.card-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		text-decoration: none;
		font-weight: 700;
	}

	.action {
		min-height: 44px;
		padding: 0.78rem 1rem;
		border-radius: 8px;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 74%, transparent);
		background: rgba(255, 255, 255, 0.86);
		color: #0f172a;
	}

	.action--primary {
		background: #0f172a;
		border-color: #0f172a;
		color: white;
	}

	.step-list,
	.theme-utility {
		display: grid;
		gap: 0.75rem;
	}

	.theme-utility {
		grid-template-columns: 1fr auto;
		align-items: center;
		margin-top: 0.5rem;
		padding: 0.9rem 0.95rem;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.68);
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 72%, transparent);
	}

	.step-item {
		display: grid;
		grid-template-columns: 12px 1fr;
		gap: 0.8rem;
		align-items: start;
	}

	.step-index {
		width: 12px;
		height: 12px;
		margin-top: 0.45rem;
		border-radius: 999px;
		background: #0f172a;
	}

	.inline-link,
	.card-link {
		color: #0f172a;
	}

	.card-link {
		margin-top: 0.4rem;
	}

	@media (max-width: 980px) {
		.hero,
		.section--split {
			grid-template-columns: 1fr;
		}

		.hero {
			min-height: auto;
		}
	}

	@media (max-width: 640px) {
		.page {
			padding-top: 1.5rem;
		}

		h1 {
			max-width: none;
			font-size: 3rem;
		}

		.map-row,
		.map-row + .map-row,
		.map-grid {
			grid-template-columns: 1fr;
		}

		.theme-utility {
			grid-template-columns: 1fr;
		}
	}
</style>
