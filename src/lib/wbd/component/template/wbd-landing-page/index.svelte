<script lang="ts">
	import type { Snippet } from 'svelte';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
	import HeroMediaSection from '$stylist/layout/component/molecule/hero-media-section/index.svelte';
	import NameHeroMediaItems from '$stylist/layout/component/molecule/name-hero-media-items/index.svelte';
	import type { LandingPageContent } from '$stylist/wbd/interface/recipe/landing-page';

	interface WbdLandingPageProps {
		content: LandingPageContent;
		appSignInHref?: string;
		heroImageSrc?: string;
		heroImageAlt?: string;
		workflowImageSrc?: string;
		workflowImageAlt?: string;
		resultImageSrc?: string;
		resultImageAlt?: string;
		brand?: Snippet;
		languageControl?: Snippet;
		class?: string;
	}

	let {
		content,
		appSignInHref = '/app/sign-in?next=%2Fapp',
		heroImageSrc = '',
		heroImageAlt = '',
		workflowImageSrc = '',
		workflowImageAlt = '',
		resultImageSrc = '',
		resultImageAlt = '',
		brand,
		languageControl,
		class: className = ''
	}: WbdLandingPageProps = $props();
</script>

<svelte:head>
	<title>{content.metaTitle}</title>
	<meta name="description" content={content.metaDescription} />
</svelte:head>

<main class="landing {className}">
	<section class="hero">
		<nav class="nav" aria-label={content.labels.nav}>
			{#if brand}{@render brand()}{/if}
			<div class="nav__links">
				<a class="nav__section-link" href="#definition">{content.nav.about}</a>
				<a class="nav__section-link" href="#cases">{content.nav.cases}</a>
				<a class="nav__section-link" href="#workflow">{content.nav.method}</a>
				<a href={appSignInHref}>{content.nav.signIn}</a>
				{#if languageControl}{@render languageControl()}{/if}
				<ThemeModeToggle />
			</div>
		</nav>

		<HeroMediaSection
			class="hero__section"
			title={content.hero.title}
			lead={content.hero.lead}
			imageSrc={heroImageSrc}
			imageAlt={heroImageAlt}
		/>
	</section>

	<NameHeroMediaItems
		class="hero__items"
		items={content.metrics}
		ariaLabel={content.labels.metrics}
	/>

	<section id="definition" class="definition" aria-label={content.labels.definition}>
		<div class="section-heading">
			<p class="eyebrow">{content.definition.eyebrow}</p>
			<h2>{content.definition.title}</h2>
		</div>
		{#each content.definition.paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}

		<div class="comparison">
			<h3>{content.definition.comparisonTitle}</h3>
			<div class="comparison__table-wrap">
				<table class="comparison__table">
					<thead>
						<tr>
							<th scope="col"></th>
							{#each content.definition.comparisonColumns as column}
								<th scope="col">{column}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each content.definition.comparisonCriteria as criterion, i}
							<tr>
								<th scope="row">{criterion}</th>
								{#each content.definition.comparisonRows[i] as value, j}
									<td data-highlight={j === content.definition.comparisonRows[i].length - 1}
										>{value}</td
									>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<section id="workflow" class="workflow" aria-label={content.labels.workflow}>
		<div class="workflow__copy">
			<div class="section-heading">
				<p class="eyebrow">{content.hero.eyebrow} / {content.workflow.eyebrow}</p>
				<h2>{content.workflow.title}</h2>
			</div>
		</div>
		<figure class="workflow__media">
			<img src={workflowImageSrc} alt={workflowImageAlt} loading="lazy" />
		</figure>
		<ol class="workflow__steps">
			{#each content.workflow.steps as step}
				<li>{step}</li>
			{/each}
		</ol>
	</section>

	<section class="intro" aria-label={content.intro.eyebrow}>
		<div class="section-heading">
			<p class="eyebrow">{content.intro.eyebrow}</p>
			<h2>{content.intro.title}</h2>
		</div>
		<p>{content.intro.body}</p>
	</section>

	<section id="cases" class="cases" aria-label={content.labels.cases}>
		<div class="section-heading">
			<p class="eyebrow">{content.casesHeading.eyebrow}</p>
			<h2>{content.casesHeading.title}</h2>
		</div>

		<div class="case-grid">
			{#each content.cases as item}
				<article class="case-card">
					<img src={item.image} alt={item.alt} loading="lazy" />
					<div class="case-card__body">
						<p class="case-card__kicker">{item.kicker}</p>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
						<strong>{item.result}</strong>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="result" aria-label={content.labels.result}>
		<figure>
			<img src={resultImageSrc} alt={resultImageAlt} loading="lazy" />
		</figure>
		<div class="result__copy">
			<p class="eyebrow">{content.result.eyebrow}</p>
			<h2>{content.result.title}</h2>
			<p>{content.result.body}</p>
			<a class="button button--primary" href={appSignInHref}>{content.result.cta}</a>
		</div>
	</section>

</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.landing {
		--landing-bg: #091016;
		--landing-bg-gradient-start: rgba(5, 12, 18, 0.92);
		--landing-bg-gradient-end: rgba(9, 16, 22, 0.98);
		--landing-text: #edf5ef;
		--landing-heading: #ffffff;
		--landing-muted: rgba(237, 245, 239, 0.72);
		--landing-muted-soft: rgba(237, 245, 239, 0.68);
		--landing-link: rgba(237, 245, 239, 0.78);
		--landing-accent: #a8d7b3;
		--landing-cta: #d7a642;
		--landing-cta-text: #0d1412;
		--landing-warning: #f0c66d;
		--landing-border: rgba(151, 181, 164, 0.18);
		--landing-border-strong: rgba(151, 181, 164, 0.34);
		--landing-panel: rgba(234, 246, 236, 0.045);
		--landing-media: #111a20;
		container-type: inline-size;
		min-height: 100vh;
		background:
			linear-gradient(
				180deg,
				var(--landing-bg-gradient-start),
				var(--landing-bg-gradient-end) 38rem
			),
			var(--landing-bg);
		color: var(--landing-text);
	}

	:global(html.light) .landing {
		--landing-bg: #f6f4ed;
		--landing-bg-gradient-start: rgba(248, 247, 241, 0.95);
		--landing-bg-gradient-end: rgba(232, 238, 228, 0.96);
		--landing-text: #102018;
		--landing-heading: #07140f;
		--landing-muted: rgba(16, 32, 24, 0.72);
		--landing-muted-soft: rgba(16, 32, 24, 0.64);
		--landing-link: rgba(16, 32, 24, 0.76);
		--landing-accent: #27684a;
		--landing-cta: #b47a20;
		--landing-cta-text: #fffaf0;
		--landing-warning: #956315;
		--landing-border: rgba(39, 104, 74, 0.2);
		--landing-border-strong: rgba(39, 104, 74, 0.34);
		--landing-panel: rgba(255, 255, 255, 0.64);
		--landing-media: #dde5dd;
	}

	:global(.nav__brand) {
		color: var(--landing-heading);
	}

	.hero,
	:global(.hero__items),
	.definition,
	.intro,
	.cases,
	.workflow,
	.result {
		width: min(100% - 2rem, 1180px);
		margin: 0 auto;
	}

	.hero {
		padding: 1.25rem 0 4rem;
	}

	:global(.hero__section) {
		--hero-media-section-heading: var(--landing-heading);
		--hero-media-section-lead: var(--landing-heading);
		--hero-media-section-border: var(--landing-border);
		--hero-media-section-media: var(--landing-media);
		--hero-media-section-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.28);
		padding: 4rem 0 0;
	}

	:global(.hero__items) {
		--name-hero-media-items-border: var(--landing-border);
		--name-hero-media-items-background: var(--landing-panel);
		--name-hero-media-items-name: var(--landing-heading);
		--name-hero-media-items-text: var(--landing-muted-soft);
		margin-top: -2rem;
		padding-bottom: 5rem;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 3rem;
	}

	.nav__links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
		gap: 0.5rem 0.875rem;
		font-size: 0.875rem;
	}

	.nav__links a {
		color: var(--landing-link);
		text-decoration: none;
	}

	.nav__links a:hover {
		color: var(--landing-heading);
	}

	.eyebrow,
	.case-card__kicker {
		margin: 0 0 0.75rem;
		color: var(--landing-accent);
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	h2,
	h3,
	p {
		margin-top: 0;
	}

	h2 {
		margin-bottom: 1rem;
		font-size: clamp(2rem, 4cqw, 3.5rem);
		line-height: 1.02;
		letter-spacing: 0;
		color: var(--landing-heading);
	}

	h3 {
		margin-bottom: 0.75rem;
		font-size: 1.35rem;
		line-height: 1.16;
		letter-spacing: 0;
		color: var(--landing-heading);
	}

	.intro > p,
	.result__copy p,
	.case-card p,
	.workflow li {
		color: var(--landing-muted);
		font-size: 1rem;
		line-height: 1.7;
	}

	.button {
		min-height: 2.875rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 1rem;
		border-radius: 0.375rem;
		font-size: 0.925rem;
		font-weight: 750;
		text-decoration: none;
	}

	.button--primary {
		background: var(--landing-cta);
		color: var(--landing-cta-text);
	}

	.button--secondary {
		border: 1px solid var(--landing-border-strong);
		color: var(--landing-text);
	}

	.workflow__media,
	.result figure {
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--landing-border);
		border-radius: 0.5rem;
		background: var(--landing-media);
		box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.28);
	}

	.case-card img,
	.workflow__media img,
	.result img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.intro {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 2rem;
		padding: 5rem 0;
		border-top: 1px solid var(--landing-border);
	}

	.section-heading {
		max-width: 42rem;
	}

	.definition {
		padding: 5rem 0;
		border-top: 1px solid var(--landing-border);
	}

	.definition > p {
		max-width: 54rem;
		margin-bottom: 1rem;
		color: var(--landing-muted);
		font-size: 1rem;
		line-height: 1.7;
	}

	.comparison {
		margin-top: 2.5rem;
	}

	.comparison h3 {
		max-width: 42rem;
	}

	.comparison__table-wrap {
		overflow-x: auto;
		border: 1px solid var(--landing-border);
		border-radius: 0.5rem;
	}

	.comparison__table {
		width: 100%;
		min-width: 36rem;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.comparison__table th,
	.comparison__table td {
		padding: 0.85rem 1rem;
		text-align: left;
		border-bottom: 1px solid var(--landing-border);
		white-space: nowrap;
	}

	.comparison__table thead th {
		color: var(--landing-heading);
		font-weight: 700;
		background: var(--landing-panel);
	}

	.comparison__table tbody th {
		color: var(--landing-heading);
		font-weight: 600;
		white-space: normal;
	}

	.comparison__table tbody td {
		color: var(--landing-muted);
		white-space: normal;
	}

	.comparison__table tbody td[data-highlight='true'] {
		color: var(--landing-accent);
		font-weight: 700;
	}

	.comparison__table tbody tr:last-child th,
	.comparison__table tbody tr:last-child td {
		border-bottom: 0;
	}

	.cases {
		padding: 4rem 0 5rem;
	}

	.case-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}

	.case-card {
		grid-column: span 2;
		overflow: hidden;
		border: 1px solid var(--landing-border);
		border-radius: 0.5rem;
		background: var(--landing-panel);
	}

	.case-card:nth-child(1),
	.case-card:nth-child(2) {
		grid-column: span 3;
	}

	.case-card img {
		aspect-ratio: 16 / 9;
		border-bottom: 1px solid var(--landing-border);
	}

	.case-card__body {
		padding: 1.125rem;
	}

	.case-card strong {
		display: block;
		margin-top: 1rem;
		color: var(--landing-warning);
		font-size: 0.93rem;
		line-height: 1.5;
	}

	.workflow,
	.result {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: 2rem;
		align-items: center;
		padding: 5rem 0;
		border-top: 1px solid var(--landing-border);
	}

	.workflow {
		align-items: start;
	}

	.workflow__copy {
		grid-column: 1;
	}

	.workflow__media {
		grid-column: 2;
		grid-row: 1 / span 2;
	}

	.workflow__steps {
		grid-column: 1;
		display: grid;
		gap: 0.75rem;
		margin: 0;
		padding: 0;
		list-style: none;
		counter-reset: workflow;
	}

	.workflow li {
		counter-increment: workflow;
		position: relative;
		min-height: 3rem;
		padding-left: 3rem;
	}

	.workflow li::before {
		content: counter(workflow, decimal-leading-zero);
		position: absolute;
		left: 0;
		top: 0.15rem;
		width: 2rem;
		height: 2rem;
		display: inline-grid;
		place-items: center;
		border: 1px solid var(--landing-border-strong);
		border-radius: 0.375rem;
		color: var(--landing-accent);
		font-size: 0.72rem;
		font-weight: 800;
	}

	.workflow__media,
	.result figure {
		aspect-ratio: 16 / 9;
	}

	.result {
		padding-bottom: 6rem;
	}

	.result__copy {
		max-width: 34rem;
	}

	.result__copy .button {
		margin-top: 1rem;
	}

	@container (max-width: 920px) {
		.intro,
		.workflow,
		.result {
			grid-template-columns: 1fr;
		}
		.workflow__copy,
		.workflow__media,
		.workflow__steps {
			grid-column: auto;
			grid-row: auto;
		}

		.case-card,
		.case-card:nth-child(1),
		.case-card:nth-child(2) {
			grid-column: span 3;
		}
	}

	@container (max-width: 680px) {
		.hero,
		:global(.hero__items),
		.definition,
		.intro,
		.cases,
		.workflow,
		.result {
			width: min(100% - 1rem, 1180px);
		}

		.nav {
			align-items: flex-start;
		}

		.nav__links {
			justify-content: flex-end;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.nav__section-link {
			display: none;
		}

		.case-grid {
			grid-template-columns: 1fr;
		}

		.case-card,
		.case-card:nth-child(1),
		.case-card:nth-child(2) {
			grid-column: auto;
		}
	}
</style>
