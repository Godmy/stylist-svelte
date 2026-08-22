<script lang="ts">
	import LegendBarDiagram from '$stylist/chart/component/organism/legend-bar-diagram/index.svelte';
	import LegendBandDiagram from '$stylist/chart/component/organism/legend-band-diagram/index.svelte';

	interface DomainFileMetric {
		name: string;
		fileCount: number;
	}

	interface DomainFilesManifest {
		domains: DomainFileMetric[];
		totals: {
			domains: number;
			files: number;
			atoms: number;
			molecules: number;
			organisms: number;
			templates: number;
			pages: number;
		};
	}

	interface DomainComponentIntervalMetric {
		name: string;
		value: number;
		atom: number;
		molecule: number;
		organism: number;
		template: number;
		page: number;
	}

	interface DomainComponentIntervalsManifest {
		domains: DomainComponentIntervalMetric[];
		totals: {
			components: number;
			atoms: number;
			molecules: number;
			organisms: number;
			templates: number;
			pages: number;
		};
	}

	interface DomainFileOverviewProps {
		manifest: DomainFilesManifest;
		componentIntervalsManifest: DomainComponentIntervalsManifest;
		class?: string;
	}

	let {
		manifest,
		componentIntervalsManifest,
		class: className = ''
	}: DomainFileOverviewProps = $props();

	const domainFileChartItems = $derived(
		manifest.domains.map((domain) => [domain.name, domain.fileCount] as [string, number])
	);
	const domainComponentIntervalItems = $derived(
		componentIntervalsManifest.domains.map((domain) => ({
			text: domain.name,
			value: domain.value,
			atom: domain.atom,
			molecule: domain.molecule,
			organism: domain.organism,
			template: domain.template,
			page: domain.page
		}))
	);
</script>

<div class="c-domain-file-overview {className}">
	<header class="summary">
		<div>
			<p class="eyebrow">Domain Files</p>
			<h2>Domain file inventory</h2>
		</div>

		<div class="totals" aria-label="Library totals">
			<div>
				<strong>{manifest.totals.domains}</strong>
				<span>domains</span>
			</div>
			<div>
				<strong>{manifest.totals.files}</strong>
				<span>files</span>
			</div>
			<div>
				<strong>{manifest.totals.atoms + manifest.totals.molecules + manifest.totals.organisms + manifest.totals.templates + manifest.totals.pages}</strong>
				<span>components</span>
			</div>
		</div>
	</header>

	<article class="overview-card">
		<header class="overview-card__header">
			<div>
				<p class="eyebrow">Files By Domain</p>
				<h3>All domains</h3>
			</div>
			<strong>{manifest.totals.domains} domains / {manifest.totals.files} files</strong>
		</header>

		<LegendBarDiagram
			items={domainFileChartItems}
			width={1180}
			plotHeight={230}
			labelAreaHeight={170}
			color="#2563eb"
			ariaLabel="Files by domain bar chart"
		/>
	</article>

	<article class="overview-card">
		<header class="overview-card__header">
			<div>
				<p class="eyebrow">Component Intervals</p>
				<h3>Component bands by domain</h3>
			</div>
			<strong>
				{componentIntervalsManifest.totals.atoms} atoms,
				{componentIntervalsManifest.totals.molecules} molecules,
				{componentIntervalsManifest.totals.organisms} organisms,
				{componentIntervalsManifest.totals.templates} templates,
				{componentIntervalsManifest.totals.pages} pages,
				{componentIntervalsManifest.totals.components} components
			</strong>
		</header>

		<LegendBandDiagram
			items={domainComponentIntervalItems}
			width={1180}
			plotHeight={230}
			labelAreaHeight={170}
			color="#2563eb"
			ariaLabel="Component intervals by domain band chart"
		/>
	</article>
</div>

<style>
	.c-domain-file-overview,
	.overview-card {
		display: grid;
		gap: 1rem;
	}

	.summary,
	.overview-card {
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.summary {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
		align-items: end;
	}

	.summary > :first-child {
		min-width: 0;
	}

	.overview-card__header {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
	}

	.overview-card__header strong,
	.totals strong {
		font-size: 1.5rem;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.totals {
		display: flex;
		flex-wrap: wrap;
		grid-column: 2;
		justify-content: center;
		gap: 0.75rem;
	}

	.totals div {
		display: grid;
		gap: 0.2rem;
		min-width: 5.5rem;
	}

	.eyebrow {
		color: var(--color-text-secondary, #64748b);
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	h2,
	h3,
	p {
		margin: 0;
	}

	h2 {
		font-size: 1.35rem;
		line-height: 1.15;
	}

	h3 {
		font-size: 1rem;
		line-height: 1.2;
	}

	@media (max-width: 720px) {
		.summary {
			align-items: start;
			grid-template-columns: 1fr;
		}

		.totals {
			grid-column: 1;
			justify-content: start;
			width: 100%;
		}
	}
</style>
